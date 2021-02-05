import { usePokemons } from "~/hooks/usePokemons"

export function NativeFetch({ size }: { size: number }) {
  const [loading, pokemons, error] = usePokemons(size)
  if (error) {
    throw error
  }
  if (loading || pokemons === null) {
    return <p>loading...</p>
  }

  return (
    <>
      {pokemons.length === 0 ? (
        <p>no pokemon</p>
      ) : (
        <ul>
          {pokemons.map((pokemon) => {
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
