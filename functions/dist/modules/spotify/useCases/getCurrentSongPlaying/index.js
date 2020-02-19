"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetCurrentSongPlaying_1 = require("./GetCurrentSongPlaying");
const services_1 = require("../../services");
const getCurrentSong = new GetCurrentSongPlaying_1.GetCurrentSong(services_1.spotifyService);
exports.getCurrentSong = getCurrentSong;
//# sourceMappingURL=index.js.map