
require('dotenv').config()
import { graphQLServer } from "./shared/infra/graphql/server";

graphQLServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
