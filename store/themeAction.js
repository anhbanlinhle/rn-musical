export const changeThemeAction = (currentTheme) => {
    return {
        type: 'CHANGE_THEME',
        payload: currentTheme === 'light' ? 'dark' : 'light'
    }
}