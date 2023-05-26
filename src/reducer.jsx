export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, // keep whatever is in the current state
                user: action.user // update the user with the user that was passed in
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playLists: action.playLists
            }

        default:
            return state;
    }
}

export default reducer;