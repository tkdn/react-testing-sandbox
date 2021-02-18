import { gql } from "@apollo/client"
import { MockedResponse } from "@apollo/client/testing"

import { pokemonQuery } from "~/api/fetchPokemons"

const pokemons = [
  {
    __typename: "Pokemon",
    id: "UG9rZW1vbjowMDE=",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    name: "Bulbasaur",
    number: "001",
    attacks: {
      __typename: "PokemonAttack",
      special: [{ __typename: "Attack", name: "Power Whip", type: "Grass", damage: 70 }]
    }
  },
  {
    __typename: "Pokemon",
    id: "UG9rZW1vbjowMDI=",
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    name: "Ivysaur",
    number: "002",
    attacks: {
      __typename: "PokemonAttack",
      special: [{ __typename: "Attack", name: "Power Whip", type: "Grass", damage: 70 }]
    }
  }
]
export const mocksSuccess: MockedResponse[] = [
  {
    request: {
      query: gql(pokemonQuery),
      variables: {
        size: 2
      }
    },
    result: {
      data: { pokemons }
    }
  }
]

export const mockZero: MockedResponse[] = [
  {
    request: {
      query: gql(pokemonQuery),
      variables: {
        size: 2
      }
    },
    result: {
      data: { pokemons: [] }
    }
  }
]

export const mockError: MockedResponse[] = [
  {
    request: {
      query: gql(pokemonQuery),
      variables: {
        size: 2
      }
    },
    error: new Error("http status: 400")
  }
]
