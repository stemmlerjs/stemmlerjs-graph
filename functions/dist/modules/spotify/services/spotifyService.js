"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const currentPlayingSongMap_1 = require("../mappers/currentPlayingSongMap");
class SpotifyService {
    constructor() {
        /**
         * We're going to need a refresh token and we're going to need to
         * hard code it into our application.
         */
        this.clientId = process.env.SPOTIFY_CLIENT_ID;
        this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
        this.redirectUrl = process.env.SPOTIFY_REDIRECT_URL;
        this.refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
        this.currentAccessToken = "";
    }
    setCurrentAccessToken(token) {
        this.currentAccessToken = token;
    }
    setRefreshToken(token) {
        this.refreshToken = token;
    }
    hasAccessToken() {
        return this.currentAccessToken !== "";
    }
    async exchangeCodeForAccessAndRefreshToken(code) {
        //@ts-ignore
        const params = new URLSearchParams();
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('redirect_uri', this.redirectUrl);
        const response = await axios_1.default({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            params
        });
        this.setCurrentAccessToken(response.data.access_token);
        this.setRefreshToken(response.data.refresh_token);
        return {
            accessToken: this.currentAccessToken,
            refreshToken: this.refreshToken
        };
    }
    async refreshAccessToken() {
        //@ts-ignore
        const params = new URLSearchParams();
        params.append('client_id', this.clientId);
        params.append('client_secret', this.clientSecret);
        params.append('grant_type', 'refresh_token');
        params.append('refresh_token', this.refreshToken);
        const response = await axios_1.default({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            params
        });
        this.setCurrentAccessToken(response.data.access_token);
    }
    async getCurrentlyPlayingSong() {
        if (!this.hasAccessToken()) {
            await this.refreshAccessToken();
        }
        // TODO: If we don't have an access token already, then we're going to need to get one.
        // TODO: Test if the request fails because the token is invalid, we should try again after using the refresh token
        const response = await axios_1.default({
            url: 'https://api.spotify.com/v1/me/player/currently-playing',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.currentAccessToken}`
            }
        });
        return currentPlayingSongMap_1.CurrentSongPlayingResultMap.toCurrentSongPlayingResult(response.data);
    }
}
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotifyService.js.map