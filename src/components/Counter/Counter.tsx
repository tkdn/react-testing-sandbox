import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}
