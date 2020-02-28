# stemmlerjs-graph

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6d461e8-80a7-4817-959e-211fc047fdc1/deploy-status)](https://app.netlify.com/sites/infallible-beaver-51cb71/deploys)

![Personal Data Graph](https://user-images.githubusercontent.com/6892666/75119822-6b8f0c80-5654-11ea-9b14-4aee05a13cf5.png)

One day, I thought it would be really cool to be able to show the current song that I'm listening to on Spotify on my website, like a true JAMstack champ. I realized that I needed a backend service to abstract the complexity of integrating with Spotify and I also needed it to _act_ as me. That feature led me to consider if there are other interesting intergrations that might be useful, and if there's any merit in maintaining a Personal Data Graph. Perhaps, if there is a standard way to define and [federate](https://www.apollographql.com/docs/apollo-server/federation/introduction/) mine and others' graphs together. I'm not entirely sure about the utility of the use cases yet, but I'm certainly thinking about it.

Consider this project me just _thinking out loud_. 

## Spotify

A collection of operations related to me on Spotify. Read about [how this works here](https://khalilstemmler.com/articles/tutorials/getting-the-currently-playing-song-spotify/).

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
