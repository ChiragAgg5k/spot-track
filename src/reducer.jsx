export const initialState = {
    user: null,
    playlists: [],
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

        default:
            return state;
    }
}

export default reducer;