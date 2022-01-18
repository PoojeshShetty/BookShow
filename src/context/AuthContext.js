import {createContext, useReducer,useEffect} from 'react'
import { initialAuthState, authReducer } from '../reducer/AuthReducer'
import { projectAuth } from '../config/firebase'

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    
    const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState)

    const uid = authState.uid

    useEffect(()=>{
        projectAuth.onAuthStateChanged(user => {
            if(user)
                dispatchAuth({type:'ADD_USERID',payload:user.uid})
            else
                dispatchAuth({type:'AUTH_READY',payload: null})
        })
    })

    useEffect(()=>{
        if(!uid) return 
    })


    return (
        <AuthContextProvider value={{...authState,dispatchAuth}}>
            {children}
        </AuthContextProvider>
    )
}

export default AuthContextProvider

