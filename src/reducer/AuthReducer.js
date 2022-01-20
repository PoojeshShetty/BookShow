const authReducer = (state, action) => {
    
    switch(action.type){
        case 'ADD_USERID':
            return ({...state, uid: action.payload})
        case 'AUTH_READY': 
            return ({...state, isAuthReady: true, user: action.payload})
        case 'LOGIN':
            return ({...state, user: action.payload})
        case 'LOGOUT':
            return ({...state, user:null, uid:null})
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
