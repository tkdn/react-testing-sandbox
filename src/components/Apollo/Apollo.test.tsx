import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import { cleanup, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"

import { Apollo } from "~/components/Apollo"
import { ErrorBoundary } from "~/test-utils/ErrorBoundary"

import { mockError, mocksSuccess, mockZero } from "./fixtures"

const WrappedApollo = ({ mocks }: { mocks: MockedResponse[] }) => {
  return (
    <ErrorBoundary>
      <MockedProvider mocks={mocks}>
        <Apollo size={2} />
      </MockedProvider>
    </ErrorBoundary>
  )
}

describe("Apollo", () => {
  afterEach(() => {
    cleanup()
  })
  test("render:loding", () => {
    const { asFragment } = render(<WrappedApollo mocks={mocksSuccess} />)
    screen.getByText("loading...")
    expect(asFragment()).toMatchSnapshot()
  })
  test("render:pokemons", async () => {
    const { asFragment } = render(<WrappedApollo mocks={mocksSuccess} />)
    await waitForElementToBeRemoved(() => screen.getByText("loading..."))
    expect(asFragment()).toMatchSnapshot()
  })
  test("render:no pokemon", async () => {
    const { asFragment } = render(<WrappedApollo mocks={mockZero} />)
    await waitFor(() => screen.getByText("no pokemon"))
    expect(asFragment()).toMatchSnapshot()
  })
  test("error", async () => {
    const spy = jest.spyOn(console, "error")
    spy.mockImplementation(() => void 0)
    render(<WrappedApollo mocks={mockError} />)
    await waitFor(() => screen.getByText("http status: 400"))
    spy.mockRestore()
  })
})
