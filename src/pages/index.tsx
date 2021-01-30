import { Analytics } from "~/components/Analytics"
import { AsyncCounter } from "~/components/AsyncCounter"
import { Counter } from "~/components/Counter"
import { Header } from "~/components/Header"
export default function Index() {
  return (
    <>
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
      <p>
        <pre>null</pre>
      </p>
      <Analytics id="123" role="admin" />
    </>
  )
}
