import { ChangeEvent, FormEvent, useState } from "react"

import { useAlertDispatch } from "~/context/AlertContext"

export function AlertForm() {
  const [text, setText] = useState("")
  const { showDispatcher, hideDispatcher } = useAlertDispatch()
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    setText(text)
    showDispatcher(text)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setText(value)
  }
  const onCloseHandler = () => {
    setText("")
    hideDispatcher()
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={text} onChange={onChangeHandler} />
      <button onClick={() => showDispatcher(text)}>Alert</button>
      <br />
      <button type="reset" onClick={onCloseHandler}>
        Alert Close
      </button>
    </form>
  )
}
