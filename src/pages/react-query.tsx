import { QueryClient, QueryClientProvider } from "react-query"

import { ReactQuery } from "~/components/ReactQuery"

const reactQueryclient = new QueryClient()

export default function ReactQueryPage() {
  return (
    <>
      <h1>ReactQuery</h1>
      <QueryClientProvider client={reactQueryclient}>
        <ReactQuery size={5} />
      </QueryClientProvider>
    </>
  )
}
