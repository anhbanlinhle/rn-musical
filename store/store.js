import { combineReducers, createStore } from "redux"

const initialState = {
    theme: 'dark',
    songIndex: -1,
    songName: '',
    songCover: ''
}

const rootReducer = combineReducers({
    appData: () => initialState
})

export const store = createStore(rootReducer)