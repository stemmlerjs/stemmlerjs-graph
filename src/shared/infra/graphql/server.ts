
import { ApolloServer, gql } from 'apollo-server';
import { getCurrentSong } from '../../../modules/spotify/useCases/getCurrentSongPlaying';

const resolvers = {
  Query: {
    spotifyGetCurrentSongPlaying: async () => {
      const currentSong = await getCurrentSong.execute();
      return currentSong;
    }
  }
}

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
    spotifyGetCurrentSongPlaying: CurrentSongPlayingResult!
  }
`

const graphQLServer = new ApolloServer({
  typeDefs,
  resolvers
});

export { graphQLServer }