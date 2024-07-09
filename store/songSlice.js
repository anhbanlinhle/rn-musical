import {createSlice} from "@reduxjs/toolkit"

export const songSlice = createSlice({
    name: 'songData',
    initialState: {
        img: '',
        song: '',
        artist: '',
        link: '',
        type: '',
    },
    reducers: {
        addPlayingSong: (state, action) => {
            state.img = action.payload.img
            state.song = action.payload.song
            state.artist = action.payload.artist
            state.link = action.payload.link
            state.type = action.payload.type
        },
        removePlayingSong: (state) => {
            state.img = ''
            state.song = ''
            state.artist = ''
            state.link = ''
            state.type = ''
        }
    }
})

export const {addPlayingSong, removePlayingSong} = songSlice.actions

export const selectImg = (state) => state.songData.img
export const selectSong = (state) => state.songData.song
export const selectArtist = (state) => state.songData.artist
export const selectLink = (state) => state.songData.link
export const selectType = (state) => state.songData.type

export default songSlice.reducer