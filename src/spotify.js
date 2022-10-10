export const authEndpoint="https://accounts.spotify.com/authorize"
const REDIRECT_URI = "http://localhost:3000"
const CLIENT_ID = "d9daa17230b04946860d535e21916639"
const RESPONSE_TYPE = "token"
const scopes=[
    "user-read-playback-position",
    "user-read-private",
    "user-read-email",
    "playlist-modify-public",
    "playlist-modify-private",
    //"playlist-read-public",
    "playlist-read-private",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "playlist-read-collaborative",
    "user-follow-read",
    "user-follow-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
]

export const loginUrl=`${authEndpoint}
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&scope=${scopes.join("%20")}
&response_type=${RESPONSE_TYPE}
&show_dialog=true`