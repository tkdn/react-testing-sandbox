import Link from "next/link"

import { Alert } from "~/components/Alert"
import { AlertForm } from "~/components/AlertForm"
import { AsyncCounter } from "~/components/AsyncCounter"
import { Counter } from "~/components/Counter"
import { Header } from "~/components/Header"
import { AlertProvider } from "~/context/AlertContext"
import { useInitialAnalytics } from "~/hooks/useInitialAnalytics"

export default function Index() {
  useInitialAnalytics({ id: "123", role: "admin" })
  return (
    <AlertProvider>
      <Alert />
      <nav>
        <ul>
          <li>
            <Link href="/native-fetch">NativeFetch</Link>
          </li>
          <li>
            <Link href="/react-query">ReactQuery</Link>
          </li>
          <li>
            <Link href="/apollo">apollo</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <h1>Header</h1>
      <Header />
      <hr />
      <h1>Counter</h1>
      <Counter />
      <hr />
      <h1>AsyncCounter</h1>
      <AsyncCounter />
      <hr />
      <h1>AlertForm Context</h1>
      <AlertForm />
    </AlertProvider>
  )
}
