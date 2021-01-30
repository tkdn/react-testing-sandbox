import { Analytics } from "~/components/Analytics"
import { Header } from "~/components/Header"
export default function Index() {
  return (
    <>
      <Header />
      <Analytics id="123" role="admin" />
    </>
  )
}
