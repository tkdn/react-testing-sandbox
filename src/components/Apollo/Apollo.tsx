import { gql, useQuery } from "@apollo/client"

import { Pokemon, pokemonQuery } from "~/api/fetchPokemons"

export function Apollo({ size }: { size: number }) {
  const { error, loading, data } = useQuery<{ pokemons: Pokemon[] }>(gql(pokemonQuery), { variables: { size } })
  if (error) {
    throw error
  }
  if (loading || !data) {
    return <p>loading...</p>
  }
  return (
    <>
      {data.pokemons.length === 0 ? (
        <p>no pokemon</p>
      ) : (
        <ul>
          {data.pokemons.map((pokemon) => {
            return (
              <li key={pokemon.id}>
                <img src={pokemon.image} width="120" />
                <p>{pokemon.name}</p>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
