import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./themeSlice"
import likedReducer from "./likedSlice"

export default configureStore({
    reducer: {
        themeData: themeReducer,
        likedData: likedReducer,
    },
})