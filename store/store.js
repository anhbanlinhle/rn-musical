import { combineReducers, createStore } from "redux"
import themeReducer from "./themeReducer"

const rootReducer = combineReducers({
    appData: themeReducer
})

export const store = createStore(rootReducer)