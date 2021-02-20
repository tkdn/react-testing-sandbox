import { graphql } from "msw"

export const handlers = [
  graphql.query("PokemonList", (req, res, ctx) => {
    const { size } = req.variables

    if (!size) {
      return res(
        ctx.data({
          pokemons: []
        })
      )
    }

    if (size === 400) {
      return res(
        ctx.status(400, ""),
        ctx.data({
          message: "This is 400."
        })
      )
    }

    return res(
      ctx.data({
        pokemons: [
          {
            id: "UG9rZW1vbjowMDE=",
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            name: "Bulbasaur",
            __typename: "Pokemon"
          },
          {
            id: "UG9rZW1vbjowMDI=",
            image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
            name: "Ivysaur",
            __typename: "Pokemon"
          }
        ]
      })
    )
  })
]
