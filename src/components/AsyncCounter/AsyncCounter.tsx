import { useCallback, useState } from "react"

export function AsyncCounter({ delay = 1000 }: { delay?: number }) {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const handler = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setCount(count + 1)
      setLoading(false)
    }, delay)
  }, [count])
  return (
    <>
      <div>AsyncCount: {count}</div>
      <div>
        {isLoading && <span>...Loading</span>}
        <button onClick={handler} disabled={isLoading}>
          AsyncIncrement
        </button>
      </div>
    </>
  )
}
