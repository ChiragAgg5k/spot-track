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

export const getTokenFromURL = () => {
    const token = window.location.hash // extract the access token from the URL
        .substring(1) // get rid of the # at the beginning of the string
        .split("&") // split the string at the & sign
        .reduce((initial, item) => {
            let parts = item.split('='); // split the string into an array of 2 strings
            initial[parts[0]] = decodeURIComponent(parts[1]); // add the key-value pair to the object
            return initial;
        }, {}); // reduce the array into an object
    return token;
};

// using string interpolation to create the loginURL
export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;