const API_ENDPOINT = "https://graphql-pokemon2.vercel.app/"
const pokemonQuery = `
  query PokemonList($size: Int!) {
    pokemons(first: $size) {
      id
      number
      name
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`

export async function fetchPokemons(size: number) {
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
