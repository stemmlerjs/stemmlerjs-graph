
require('dotenv').config()
import { createServer } from "./shared/infra/graphql/server";

const graphQLServer = createServer();

graphQLServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

