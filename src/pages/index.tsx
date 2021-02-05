import { Analytics } from "~/components/Analytics"
import { AsyncCounter } from "~/components/AsyncCounter"
import { Counter } from "~/components/Counter"
import { Header } from "~/components/Header"
import { NativeFetch } from "~/components/NativeFetch"

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
      <pre>null</pre>
      <Analytics id="123" role="admin" />
      <hr />
      <h1>NativeFetch</h1>
      <NativeFetch size={5} />
    </>
  )
}
