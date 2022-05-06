import { fireEvent, render, screen } from "@testing-library/react"

import { Counter } from "./"

describe("Counter", () => {
  test("render", () => {
    const { asFragment } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
  })
  test("click:count", () => {
    render(<Counter />)
    const button = screen.getByText("Increment")
    fireEvent.click(button)
    fireEvent.click(button)
    screen.getByText("Count: 2")
  })
})
