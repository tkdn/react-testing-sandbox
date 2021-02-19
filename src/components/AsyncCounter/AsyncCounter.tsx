import { useState } from "react"

export function AsyncCounter({ delay = 1000 }: { delay?: number }) {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const handler = () => {
    setLoading(true)
    setTimeout(() => {
      setCount(count + 1)
      setLoading(false)
    }, delay)
  }
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
