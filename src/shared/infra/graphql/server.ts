
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { ApolloServer, gql } from 'apollo-server';
import { getCurrentSong } from '../../../modules/spotify/useCases/getCurrentSongPlaying';

const resolvers = {
  Query: {
    spotifyGetCurrentSongPlaying: async () => {
      const currentSongResult = await getCurrentSong.execute();
      return currentSongResult.isRight() ? currentSongResult.value : null;
    }
  }
};

const typeDefs = gql`
  
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
    spotifyGetCurrentSongPlaying: CurrentSongPlayingResult
  }
`;

function createLambdaServer () {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

function createServer () {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
}

export { createLambdaServer, createServer }