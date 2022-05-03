import { act, cleanup, renderHook } from "@testing-library/react"
import { ReactNode } from "react"

import { AlertProvider, useAlertDispatch, useAlertState } from "./AlertContext"

function wrapper(props: { children: ReactNode }) {
  return <AlertProvider>{props.children}</AlertProvider>
}

function useAlertContextTest() {
  const { show, message } = useAlertState()
  const { showDispatcher, hideDispatcher } = useAlertDispatch()
  return {
    show,
    message,
    showDispatcher,
    hideDispatcher
  }
}

describe("AlertContext", () => {
  afterEach(() => {
    cleanup()
  })

  test("context: initial state", () => {
    const { result } = renderHook(() => useAlertContextTest(), { wrapper })

    expect(result.current.show).not.toBe(true)
    expect(result.current.message).toBe("")
  })
  test("context: update state", () => {
    const { result } = renderHook(() => useAlertContextTest(), { wrapper })

    // show
    act(() => {
      result.current.showDispatcher("test message")
    })
    expect(result.current.show).toBe(true)
    expect(result.current.message).toBe("test message")
    // hide
    act(() => {
      result.current.hideDispatcher()
    })
    expect(result.current.show).not.toBe(true)
  })
})
