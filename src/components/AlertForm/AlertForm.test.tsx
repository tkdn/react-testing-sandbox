import { cleanup, fireEvent, render } from "@testing-library/react"

import * as AlertContext from "~/context/AlertContext"

import { AlertForm } from "."

let useAlertDispatchSpy: jest.SpyInstance<unknown>
let alertShowDispatchSpy: jest.SpyInstance<unknown>
let alertHideDispatchSpy: jest.SpyInstance<unknown>

describe("AlertForm", () => {
  beforeEach(() => {
    useAlertDispatchSpy = jest.spyOn(AlertContext, "useAlertDispatch")
    alertShowDispatchSpy = jest.fn()
    alertHideDispatchSpy = jest.fn()
    useAlertDispatchSpy.mockImplementation(() => ({
      showDispatcher: alertShowDispatchSpy,
      hideDispatcher: alertHideDispatchSpy
    }))
  })
  afterEach(() => {
    useAlertDispatchSpy.mockClear()
    alertShowDispatchSpy.mockClear()
    alertHideDispatchSpy.mockClear()
    cleanup()
  })
  test("render", () => {
    const { asFragment } = render(<AlertForm />)
    expect(asFragment()).toMatchSnapshot()
  })
  test("click: show dispatch", () => {
    const { container } = render(<AlertForm />)
    const input = container.querySelector("input") as HTMLInputElement
    const button = container.querySelector("button") as HTMLButtonElement
    fireEvent.change(input, { target: { value: "test message" } })
    fireEvent.click(button)
    expect(alertShowDispatchSpy).toBeCalledWith("test message")
  })
  test("submit: show dispatch", () => {
    const { container } = render(<AlertForm />)
    const input = container.querySelector("input") as HTMLInputElement
    const form = container.querySelector("form") as HTMLFormElement
    fireEvent.change(input, { target: { value: "test message" } })
    fireEvent.submit(form)
    expect(alertShowDispatchSpy).toBeCalledWith("test message")
  })
  test("click: hide dispatch", () => {
    const { getByText } = render(<AlertForm />)
    const button = getByText("Alert Close")
    fireEvent.click(button)
    expect(alertHideDispatchSpy).toBeCalled()
  })
})
