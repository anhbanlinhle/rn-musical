import { combineReducers, createStore } from "redux"
import themeReducer from "./themeReducer"
import likedReducer from "./likedReducer";

const rootReducer = combineReducers({
    appData: themeReducer,
    likedData: likedReducer
})

export const store = createStore(rootReducer)