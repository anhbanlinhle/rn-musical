const initialState = {
    theme: 'dark',
    songIndex: -1,
    songName: '',
    songCover: ''
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'CHANGE_THEME':
            return {...state, theme: payload}
       default:
            return state
    }
}