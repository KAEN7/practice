import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const client = new ApolloClient({
	link: createHttpLink({ url: "https://countries.trevorblades.com" }),
	cache: new InMemoryCache(),
});

(async () => {
	const { loading, error, data } = await client.query({
		query: gql`
			query {
				continents {
					code
					name
				}
			}
		`,
	});

	console.log(loading, error, data);
})();
