import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import likedReducer from "./likedSlice"
import songReducer from "./songSlice"

export default configureStore({
    reducer: {
        themeData: themeReducer,
        likedData: likedReducer,
        songData: songReducer
    },
})