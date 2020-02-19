
import { GetCurrentSong } from "./GetCurrentSongPlaying";
import { spotifyService } from "../../services";

const getCurrentSong = new GetCurrentSong(spotifyService);

export { getCurrentSong };