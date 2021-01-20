import fetch from "node-fetch";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import clientConfig from "../../client-config";

const client = new ApolloClient({
  link: createHttpLink({
    uri: clientConfig.graphqlUrl,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
