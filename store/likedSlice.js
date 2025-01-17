import {createSlice} from "@reduxjs/toolkit"

export const likedSlice = createSlice({
  name: 'likedData',
    initialState: {
        likedPlaylists: [],
    },
    reducers: {
        addLikedPlaylist: (state, action) => {
            if (action.payload !== -1)
                state.likedPlaylists.push(action.payload)
        },
        removeLikedPlaylist: (state, action) => {
            state.likedPlaylists = state.likedPlaylists.filter(item => item !== action.payload)
        }
    }
})

export const {addLikedPlaylist, removeLikedPlaylist} = likedSlice.actions

export const selectLiked = (state) => state.likedData.likedPlaylists

export default likedSlice.reducer