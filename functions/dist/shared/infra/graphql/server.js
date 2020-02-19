"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const apollo_server_1 = require("apollo-server");
const getCurrentSongPlaying_1 = require("../../../modules/spotify/useCases/getCurrentSongPlaying");
const resolvers = {
    Query: {
        spotifyGetCurrentSongPlaying: async () => {
            const currentSong = await getCurrentSongPlaying_1.getCurrentSong.execute();
            return currentSong;
        }
    }
};
const typeDefs = apollo_server_1.gql `
  
  type Album {
    name: String!
    releaseDate: String!
    image: String!
  }

  type Artist {
    name: String!
  }

  type CurrentSongPlayingResult {
    album: Album!
    artist: Artist!
    title: String!
    previewUrl: String!
    externalUrl: String!
    trackLengthMilliseconds: Float!
    currentProgress: Float!
    isCurrentlyPlaying: Boolean!
  }

  type Query {
    spotifyGetCurrentSongPlaying: CurrentSongPlayingResult!
  }
`;
function createLambdaServer() {
    return new apollo_server_lambda_1.ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        playground: true,
    });
}
exports.createLambdaServer = createLambdaServer;
function createServer() {
    return new apollo_server_1.ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        playground: true,
    });
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map