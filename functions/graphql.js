
import { createLambdaServer } from "../dist/shared/infra/graphql/server";

const graphQLServer = createLambdaServer();

exports.handler = graphQLServer.createHandler({
  cors: {
    origin: '*'
  }
});

