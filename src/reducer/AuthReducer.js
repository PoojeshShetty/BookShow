const authReducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_USERID':
            return ({...state, uid: action.payload})
        case 'AUTH_READY': 
            return ({...state, user: action.payload})
        default:
            return state
    }
}

const initialAuthState = {
    uid: null,
    user : null,
    isAuthReady : false
}

export {
    authReducer,
    initialAuthState
} 
