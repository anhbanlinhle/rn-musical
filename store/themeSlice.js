import {createSlice} from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: 'themeData',
    initialState: {
        theme: 'light',
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload === 'light' ? 'dark' : 'light'
        }
    }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer