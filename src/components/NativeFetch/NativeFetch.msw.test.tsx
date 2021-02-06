import { act, cleanup, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"

import { NativeFetch } from "~/components/NativeFetch"
import { ErrorBoundary } from "~/test-utils/ErrorBoundary"

const WrappedNativeFetch = ({ size }: { size: number }) => {
  return (
    <ErrorBoundary>
      <NativeFetch size={size} />
    </ErrorBoundary>
  )
}

describe("NativeFetch", () => {
  afterEach(() => {
    cleanup()
  })
  test("render:loding", async () => {
    const { asFragment } = render(<WrappedNativeFetch size={5} />)
    screen.getByText("loading...")
    expect(asFragment()).toMatchSnapshot()
    await act(async () => {
      await waitForElementToBeRemoved(() => screen.getByText("loading..."))
    })
  })
  test("render:pokemons", async () => {
    const { asFragment } = render(<WrappedNativeFetch size={5} />)
    screen.getByText("loading...")
    await act(async () => {
      await waitForElementToBeRemoved(() => screen.getByText("loading..."))
    })
    expect(asFragment()).toMatchSnapshot()
  })
  test("render:no pokemon", async () => {
    const { asFragment } = render(<WrappedNativeFetch size={0} />)
    await act(async () => {
      await waitFor(() => screen.getByText("no pokemon"))
    })
    expect(asFragment()).toMatchSnapshot()
  })
  test("error", async () => {
    const spy = jest.spyOn(console, "error")
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    spy.mockImplementation(() => {})
    render(<WrappedNativeFetch size={400} />)
    await act(async () => {
      await waitFor(() => screen.getByText("http status: 400"))
    })
    spy.mockRestore()
  })
})
