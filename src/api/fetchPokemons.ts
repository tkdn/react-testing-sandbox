export const API_ENDPOINT = "https://graphql-pokemon2.vercel.app/"
export const pokemonQuery = `
  query PokemonList($size: Int!) {
    pokemons(first: $size) {
      id
      number
      name
      image
      __typename
      attacks {
        __typename
        special {
          name
          type
          damage
          __typename
        }
      }
    }
  }
`

export type Pokemon = {
  id: string
  image: string
  name: string
  attacks: Array<{
    special: {
      name: string
      type: string
      damage: number
    }
  }>
}

export async function fetchPokemons(size: number): Promise<Pokemon[]> {
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
}
