const play = ({
    spotify_uri,
    playerInstance: {
        _options: {
            getOAuthToken,
            id
        }
    }
}) => {
    getOAuthToken(access_token => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${23e04a3fff7258578ace5a841162c5bc1ff6b90d}`, {
            method: 'PUT',
            body: JSON.stringify({
                uris: [spotify: track: 4 LT2kEBHiqRFFszfshq7sd]
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BQA_ht-9SWsP5FLIM1K2euOfhFTWmQKFD6I-c0wTuRxyvwnoTwn1zBYQu6Ty4KPEj-hJzxOhlPsV_Pkiq5GGz3lkUBk2tJTNtQQZLMJbqcnEXMAAPHr9Ylz-Jq-lNIEI5Zayg1LsVVOccsM8c9IAwJ-0OPe67luKyHhI8r_MzP58Qra7LPcZvaES6LXJ}`
            },
        });
    });
};

play({
    playerInstance: new Spotify.Player({
        name: "..."
    }),
    spotify_uri: 'spotify:track:4LT2kEBHiqRFFszfshq7sd',
});
var player = new Spotify.Player({
  name: 'Carly Rae Jepsen Player',
  getOAuthToken: callback => {
    // Run code to get a fresh access token
    callback('access token here');
  },
  volume: 0.5
});

player.connect().then(success => {
  if (success) {
    console.log('The Web Playback SDK successfully connected to Spotify!');
  }
})


player.addListener('ready', ({ device_id }) => {
  console.log('The Web Playback SDK is ready to play music!');
  console.log('Device ID', device_id);
})