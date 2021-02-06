import { useEffect, useState } from "react"

import { fetchPokemons, Pokemon } from "~/api/fetchPokemons"

export function usePokemons(size: number) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Pokemon[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    setLoading(true)
    fetchPokemons(size)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [size])
  return [loading, data, error] as const
}
