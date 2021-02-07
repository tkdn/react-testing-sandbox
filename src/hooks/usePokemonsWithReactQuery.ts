import { useQuery } from "react-query"

import { API_ENDPOINT, Pokemon, pokemonQuery } from "~/api/fetchPokemons"

export function usePokemonsWithReactQuery(size: number) {
  return useQuery<Pokemon[]>("pokemons", async () => {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { size }
      })
    })
    const { data } = await response.json()
    return data.pokemons
  })
}