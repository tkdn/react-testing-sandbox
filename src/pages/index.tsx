import Link from "next/link"

import { Analytics } from "~/components/Analytics"
import { AsyncCounter } from "~/components/AsyncCounter"
import { Counter } from "~/components/Counter"
import { Header } from "~/components/Header"

export default function Index() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/native-fetch">NativeFetch</Link>
          </li>
          <li>
            <Link href="/react-query">ReactQuery</Link>
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
      <h1>Analytics</h1>
      <pre>null</pre>
      <Analytics id="123" role="admin" />
    </>
  )
}
