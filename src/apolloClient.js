import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5022/graphql", // l'URL de ton API C#
  cache: new InMemoryCache(),
});

export default client;
