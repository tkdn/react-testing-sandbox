import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import * as AlertContext from "~/context/AlertContext"

import { Button } from "./"

let alertDispatch: jest.SpyInstance<unknown>
let alertShowDispatchSpy: jest.SpyInstance<unknown>
let alertHideDispatchSpy: jest.SpyInstance<unknown>

describe("Button", () => {
  beforeEach(() => {
    alertDispatch = jest.spyOn(AlertContext, "useAlertDispatch")
    alertShowDispatchSpy = jest.fn()
    alertHideDispatchSpy = jest.fn()
    alertDispatch.mockImplementation(() => ({
      showDispatcher: alertShowDispatchSpy,
      hideDispatcher: alertHideDispatchSpy
    }))
  })
  afterEach(() => {
    alertDispatch.mockClear()
    alertShowDispatchSpy.mockClear()
    alertHideDispatchSpy.mockClear()
    cleanup()
  })
  test("render", () => {
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })
  test("click: show message dispatch", () => {
    const { container } = render(<Button />)
    const input = container.querySelector("input") as HTMLInputElement
    const button = container.querySelector("button") as HTMLButtonElement
    fireEvent.change(input, { target: { value: "test message" } })
    fireEvent.click(button)
    expect(alertShowDispatchSpy).toBeCalledWith("test message")
  })
  test("click: hide dispatch", () => {
    render(<Button />)
    const button = screen.getByText("Alert Close")
    fireEvent.click(button)
    expect(alertHideDispatchSpy).toBeCalled()
  })
})
