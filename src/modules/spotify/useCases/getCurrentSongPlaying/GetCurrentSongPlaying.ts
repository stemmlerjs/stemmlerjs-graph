
import { UseCase } from "../../../../shared/core/useCase";
import { ISpotifyService } from "../../services/spotifyService";

export class GetCurrentSong implements UseCase<any, any> {

  private spotify: ISpotifyService;

  constructor (spotify: ISpotifyService) {
    this.spotify = spotify;
  }

  public async execute (): Promise<any> {
    const song = await this.spotify.getCurrentlyPlayingSong();
    return song;
  }

}
