import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import { API_ENDPOINT } from "~/api/fetchPokemons"
import { Apollo } from "~/components/Apollo"

const apolloClient = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default function ApolloPage() {
  return (
    <ApolloProvider client={apolloClient}>
      <h1>Apollo</h1>
      <Apollo size={5} />
    </ApolloProvider>
  )
}
