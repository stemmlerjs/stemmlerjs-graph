"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const server_1 = require("./shared/infra/graphql/server");
const graphQLServer = server_1.createServer();
graphQLServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map