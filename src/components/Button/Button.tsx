import { ChangeEvent, useState } from "react"

import { useAlertDispatch } from "~/context/AlertContext"

export function Button() {
  const [text, setText] = useState("")
  const { showDispatcher, hideDispatcher } = useAlertDispatch()
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setText(value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={changeHandler} />
      <br />
      <button onClick={() => showDispatcher(text)}>Alert</button>
      <br />
      <button onClick={() => hideDispatcher()}>Alert Close</button>
    </div>
  )
}
