import { cleanup, render } from "@testing-library/react"

import { Analytics } from "~/components/Analytics"
import * as analyticsModule from "~/libs/analytics"

const spiedSetStatus = jest.spyOn(analyticsModule, "setStatus")
const spiedSendPageview = jest.spyOn(analyticsModule, "sendPageview")
const component = <Analytics id="testId" role="testRole" />

describe("Analytics", () => {
  afterEach(() => {
    cleanup()
  })
  test("render", () => {
    const { container } = render(component)
    expect(container.innerHTML).toBe("")
  })
  test("effect:setStatus", () => {
    render(component)
    expect(spiedSetStatus).toBeCalledWith({ id: "testId", role: "testRole" })
  })
  test("effect:sendPageview", () => {
    render(component)
    expect(spiedSendPageview).toBeCalled()
  })
})
