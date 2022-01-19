export const ThemeReducer = (state, action) => {

    switch(action.type){
        case 'light':
            return {theme:'light'}
        case 'dark':
            return {theme: 'dark'}
        default:
            return {...state}
    }
}