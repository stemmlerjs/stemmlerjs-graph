
require('dotenv').config()
import { spotifyService } from '../src/modules/spotify/services'

const args = process.argv;
const providedCode = args.length === 3 && !!args[2] === true;

if (!providedCode) {
  console.log('Provide the Spotify authorization code.')
  console.log('Usage example:')
  console.log('');
  console.log('npm run get-refresh-token <code>')
  console.log('');
  process.exit(1)
}

const code = args[2];

async function printRefreshToken () {
  try {
    const { refreshToken } = await spotifyService.exchangeCodeForAccessAndRefreshToken(code);
    console.log("Your very lovely refresh token is: ")
    console.log("")
    console.log(`===> ${refreshToken}`);
    console.log("")
    console.log("Copy and paste this into the .env file's 'SPOTIFY_REFRESH_TOKEN' section.")
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
}

printRefreshToken();
