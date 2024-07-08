const initialState = {
    likedSongs: ["1"],
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_SONG':
            const addedList = [payload, ...state.likedSongs]
            return {...state, songIndex: addedList}
        case 'REMOVE_SONG':
            const removedList = state.likedSongs.filter((index) => index !== payload)
            return {...state, songIndex: removedList}
        default:
            return state
    }
}