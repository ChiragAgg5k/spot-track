/* eslint-disable no-unused-vars */
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:5173/";
const clientID = "bad1516ea77d4b47844ed51c387a3527";

// scopes are the permissions that the user is giving to the app
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

// using string interpolation to create the loginURL
export const loginURL = `${authEndpoint}?
                        cliend_id=${clientID}&
                        redirect_uri=${redirectUri}
                        scopes=${scopes.join("%20")}`; // %20 is the ASCII code for a space