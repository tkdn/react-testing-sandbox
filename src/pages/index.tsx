import Link from "next/link"

import { Alert } from "~/components/Alert"
import { Analytics } from "~/components/Analytics"
import { AsyncCounter } from "~/components/AsyncCounter"
import { Button } from "~/components/Button"
import { Counter } from "~/components/Counter"
import { Header } from "~/components/Header"
import { AlertProvider } from "~/context/AlertContext"

export default function Index() {
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
      <h1>Alert Button Context</h1>
      <Button />
      <hr />
      <h1>Analytics</h1>
      <pre>null</pre>
      <Analytics id="123" role="admin" />
    </AlertProvider>
  )
}
