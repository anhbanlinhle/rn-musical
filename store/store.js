import {configureStore} from "@reduxjs/toolkit"
import {themeSlice} from "./themeSlice"
import {likedSlice} from "./likedSlice"

export default configureStore({
    reducer: {
        themeData: themeSlice,
        likedData: likedSlice,
    },
})