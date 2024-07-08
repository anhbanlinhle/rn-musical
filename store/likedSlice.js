import {createSlice} from "@reduxjs/toolkit"

export const likedSlice = createSlice({
  name: 'likedData',
    initialState: {
        likedPlaylists: [],
    },
    reducers: {
        addLikedPlaylist: (state, action) => {
            state.likedPlaylists.push(action.payload)
        },
        removeLikedPlaylist: (state, action) => {
            state.likedPlaylists = state.likedPlaylists.filter(item => item !== action.payload)
        }
    }
})

export const {addLikedPlaylist, removeLikedPlaylist} = likedSlice.actions

export default likedSlice.reducer