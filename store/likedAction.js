export const addSongAction = (playlistIndex) => {
    return {
        type: 'ADD_PLAYLIST',
        payload: playlistIndex
    }
}

export const removeSongAction = (playlistIndex) => {
    return {
        type: 'REMOVE_PLAYLIST',
        payload: playlistIndex
    }
}