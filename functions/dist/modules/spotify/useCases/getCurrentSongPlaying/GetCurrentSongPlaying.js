"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetCurrentSong {
    constructor(spotify) {
        this.spotify = spotify;
    }
    async execute() {
        const song = await this.spotify.getCurrentlyPlayingSong();
        return song;
    }
}
exports.GetCurrentSong = GetCurrentSong;
//# sourceMappingURL=GetCurrentSongPlaying.js.map