# stemmlerjs-graph

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6d461e8-80a7-4817-959e-211fc047fdc1/deploy-status)](https://app.netlify.com/sites/infallible-beaver-51cb71/deploys)

![Personal Data Graph](https://user-images.githubusercontent.com/6892666/75119822-6b8f0c80-5654-11ea-9b14-4aee05a13cf5.png)

## Spotify

A collection of operations related to me on Spotify.

### Get my currently playing song

Curious about my shocking music taste? Try running the following query to see what I'm listening to right now.

```graphql
{
  spotifyGetCurrentSongPlaying {
    artist {
      name
    }
    title
    previewUrl
    externalUrl
    currentProgress
  	album {
      name
    }
  }
}
```

## Calendar

> Coming soon

## GitHub

> Coming soon

[![Deploys by Netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)
