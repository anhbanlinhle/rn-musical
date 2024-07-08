export const addSongAction = (songIndex) => {
    return {
        type: 'ADD_SONG',
        payload: songIndex
    }
}

export const removeSongAction = (songIndex) => {
    return {
        type: 'REMOVE_SONG',
        payload: songIndex
    }
}