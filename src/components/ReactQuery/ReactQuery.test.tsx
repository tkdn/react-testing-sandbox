import { cleanup, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"

import { ReactQuery } from "~/components/ReactQuery"
import { server } from "~/test-utils/api-mock-server/server"
import { ErrorBoundary } from "~/test-utils/ErrorBoundary"

const client = new QueryClient()

const WrappedReactQuery = ({ size }: { size: number }) => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={client}>
        <ReactQuery size={size} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

describe("ReactQuery", () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => {
    cleanup()
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })
  test("render:loding", async () => {
    const { asFragment } = render(<WrappedReactQuery size={5} />)
    screen.getByText("loading...")
    expect(asFragment()).toMatchSnapshot()
    await waitForElementToBeRemoved(() => screen.getByText("loading..."))
  })
  test("render:pokemons", async () => {
    const { asFragment } = render(<WrappedReactQuery size={5} />)
    screen.getByText("loading...")
    await waitForElementToBeRemoved(() => screen.getByText("loading..."))
    expect(asFragment()).toMatchSnapshot()
  })
  test("render:no pokemon", async () => {
    const { asFragment } = render(<WrappedReactQuery size={0} />)
    await waitFor(() => screen.getByText("no pokemon"))
    expect(asFragment()).toMatchSnapshot()
  })
  test("error", async () => {
    const spy = jest.spyOn(console, "error")
    spy.mockImplementation(() => void 0)
    render(<WrappedReactQuery size={400} />)
    await waitFor(() => screen.getByText("http status: 400"))
    spy.mockRestore()
  })
})
