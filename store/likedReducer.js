const initialState = {
    likedPlaylists: [],
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_PLAYLIST':
            const addedList = [payload, ...state.likedPlaylists]
            return {...state, likedPlaylists: addedList}
        case 'REMOVE_PLAYLIST':
            const removedList = state.likedPlaylists.filter((index) => index !== payload)
            return {...state, likedPlaylists: removedList}
        default:
            return state
    }
}