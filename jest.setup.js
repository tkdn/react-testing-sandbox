import "@testing-library/jest-dom"

import fetch from "node-fetch"

import { server } from "./src/test-utils/api-mock-server/server"

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
