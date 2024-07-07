import { combineReducers, createStore } from "redux"

const initialState = {
    theme: 'light',
    songIndex: -1,
    songName: '',
    songCover: ''
}

const rootReducer = combineReducers({
    appData: () => initialState
})

export const store = createStore(rootReducer)