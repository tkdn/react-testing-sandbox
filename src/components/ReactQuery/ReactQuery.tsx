import { usePokemonsWithReactQuery } from "~/hooks/usePokemonsWithReactQuery"

export function ReactQuery({ size }: { size: number }) {
  const { data: pokemons, error, isFetching, isError } = usePokemonsWithReactQuery(size)
  if (isError) {
    throw error
  }
  if (isFetching || !pokemons) {
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
