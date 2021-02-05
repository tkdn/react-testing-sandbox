import { act, cleanup, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"

import { NativeFetch } from "~/components/NativeFetch"
import { ErrorBoundary } from "~/test-utils/ErrorBoundary"

const pokemons = [
  {
    id: "UG9rZW1vbjowMDE=",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    name: "Bulbasaur"
  },
  {
    id: "UG9rZW1vbjowMDI=",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    name: "Ivysaur"
  }
]
const WrappedNativeFetch = () => {
  return (
    <ErrorBoundary>
      <NativeFetch size={5} />
    </ErrorBoundary>
  )
}

const noDataPokemonsMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({ data: { pokemons: [] } })
    })
  })
const dataPokemonsMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: true,
      status: 200,
      json: async () => ({ data: { pokemons } })
    })
  })
const statusErrorPokemonMock = () =>
  new Promise((resolve) => {
    resolve({
      ok: false,
      status: 400,
      json: async () => ({ data: { pokemons } })
    })
  })

describe("NativeFetch", () => {
  afterEach(() => {
    cleanup()
  })
  afterAll(() => {
    ;(global.fetch as jest.Mock).mockClear()
  })
  test("render:loding", async () => {
    global.fetch = jest.fn().mockImplementation(dataPokemonsMock)
    await act(async () => {
      const { asFragment } = render(<WrappedNativeFetch />)
      screen.getByText("loading...")
      expect(asFragment()).toMatchSnapshot()
    })
  })
  test("render:pokemons", async () => {
    global.fetch = jest.fn().mockImplementation(dataPokemonsMock)
    await act(async () => {
      const { asFragment } = render(<WrappedNativeFetch />)
      screen.getByText("loading...")
      await waitForElementToBeRemoved(() => screen.getByText("loading..."))
      expect(asFragment()).toMatchSnapshot()
    })
  })
  test("render:no pokemon", async () => {
    global.fetch = jest.fn().mockImplementation(noDataPokemonsMock)
    await act(async () => {
      const { asFragment } = render(<WrappedNativeFetch />)
      await waitFor(() => screen.getByText("no pokemon"))
      expect(asFragment()).toMatchSnapshot()
    })
  })
  test("error", async () => {
    global.fetch = jest.fn().mockImplementation(statusErrorPokemonMock)
    const spy = jest.spyOn(console, "error")
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    spy.mockImplementation(() => {})
    await act(async () => {
      render(<WrappedNativeFetch />)
      await waitFor(() => screen.getByText("http status: 400"))
    })
    spy.mockRestore()
  })
})
