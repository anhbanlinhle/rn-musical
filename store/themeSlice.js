import {createSlice} from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: 'themeData',
    initialState: {
        theme: 'light',
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = (action.payload.theme === 'light' ? 'dark' : 'light')
        }
    }
})

export const {changeTheme} = themeSlice.actions

export const selectTheme = (state) => state.themeData

export default themeSlice.reducer