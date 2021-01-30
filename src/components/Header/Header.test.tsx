import { render, screen } from "@testing-library/react"

import { Header } from "~/components/Header"

describe("Header", () => {
  test("render", () => {
    render(<Header />)
    screen.getByText("これはヘッダー")
  })
})
