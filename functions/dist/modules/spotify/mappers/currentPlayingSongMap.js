"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentSongPlayingResultMap {
    static toCurrentSongPlayingResult(apiResult) {
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
        };
    }
}
exports.CurrentSongPlayingResultMap = CurrentSongPlayingResultMap;
//# sourceMappingURL=currentPlayingSongMap.js.map