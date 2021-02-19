import { useQuery } from "react-query"

import { API_ENDPOINT, Pokemon, pokemonQuery } from "~/api/fetchPokemons"

export function usePokemonsWithReactQuery(size: number) {
  return useQuery<Pokemon[]>(
    "pokemons",
    async () => {
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
      if (response.ok) {
        return data?.pokemons ?? []
      } else {
        throw new Error(`http status: ${response.status}`)
      }
    },
    {
      refetchOnWindowFocus: false,
      retry: false
    }
  )
}
