import { cleanup, render } from "@testing-library/react"

import * as AlertContext from "~/context/AlertContext"

import { Alert } from "./"

let alertStateSpy: jest.SpyInstance<unknown>

describe("Alert", () => {
  beforeEach(() => {
    alertStateSpy = jest.spyOn(AlertContext, "useAlertState")
    alertStateSpy.mockImplementation(() => ({
      show: false,
      message: ""
    }))
  })
  afterEach(() => {
    alertStateSpy.mockClear()
    cleanup()
  })
  test("render: null", () => {
    const { container } = render(<Alert />)
    expect(container.innerHTML).toBe("")
  })
  test("render: context update", () => {
    alertStateSpy.mockImplementation(() => ({
      show: true,
      message: "test message"
    }))
    const { asFragment } = render(<Alert />)
    expect(asFragment()).toMatchSnapshot()
  })
})
