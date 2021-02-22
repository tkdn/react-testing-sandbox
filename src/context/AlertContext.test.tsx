import { act, cleanup, renderHook, RenderResult } from "@testing-library/react-hooks"

import { AlertProvider, useAlertDispatch, useAlertState } from "./AlertContext"

function wrapper({ children }: { children: JSX.Element[] }) {
  return <AlertProvider>{children}</AlertProvider>
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
  let renderResult: RenderResult<ReturnType<typeof useAlertContextTest>>

  beforeEach(() => {
    const { result } = renderHook(() => useAlertContextTest(), { wrapper })
    renderResult = result
  })
  afterEach(() => {
    cleanup()
  })

  test("context: initial state", () => {
    expect(renderResult.current.show).not.toBe(true)
    expect(renderResult.current.message).toBe("")
  })
  test("context: update state", () => {
    // show
    act(() => {
      renderResult.current.showDispatcher("test message")
    })
    expect(renderResult.current.show).toBe(true)
    expect(renderResult.current.message).toBe("test message")
    // hide
    act(() => {
      renderResult.current.hideDispatcher()
    })
    expect(renderResult.current.show).not.toBe(true)
  })
})
