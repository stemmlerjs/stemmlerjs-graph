
import { CurrentSongPlayingResult } from '../../../shared/infra/graphql/generated/types';
import { Mapper } from '../../../shared/core/mapper';

export class CurrentSongPlayingResultMap implements Mapper<CurrentSongPlayingResult> {

  public static toCurrentSongPlayingResult (apiResult: any): CurrentSongPlayingResult {
    return {
      title: apiResult.item.name,
      album: {
        name: apiResult.item.album.name,
        releaseDate: apiResult.item.album.release_date,
        image: apiResult.item.album.images[0].url
      },
      artist: {
        name: apiResult.item.artists[0].name,
      },
      previewUrl: apiResult.item.preview_url,
      externalUrl: apiResult.item.external_urls.spotify,
      trackLengthMilliseconds: apiResult.item.duration_ms,
      currentProgress: apiResult.progress_ms / apiResult.item.duration_ms,
      isCurrentlyPlaying: apiResult.is_playing
    }
  }
}