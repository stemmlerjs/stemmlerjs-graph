
import { UseCase } from "../../../../shared/core/useCase";
import { ISpotifyService } from "../../services/spotifyService";
import { GetCurrentSongPlayingResult } from "./GetCurrentSongPlayingResult";
import { right, left } from "../../../../shared/core/either";

export class GetCurrentSong implements UseCase<any, GetCurrentSongPlayingResult> {

  private spotify: ISpotifyService;

  constructor (spotify: ISpotifyService) {
    this.spotify = spotify;
  }

  public async execute (): Promise<GetCurrentSongPlayingResult> {

    /**
     * We can do better with this design. We can be a lot more explicit
     * about what the errors could be, and how to handle them in calling
     * code. 
     * 
     * TODO: Let's revisit this and make it better soon.
     */

    try {
      const song = await this.spotify.getCurrentlyPlayingSong();
      return right(song)
    } catch (err) {
      console.log(err);
      return left(null);
    }
  }

}
