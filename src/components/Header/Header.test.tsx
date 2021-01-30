import { Header } from "~/components/Header"
import { render, screen } from "@testing-library/react"

describe("Header", () => {
    test("render", () => {
        render(<Header />)
        screen.getByText("これはヘッダー")
    })
})
