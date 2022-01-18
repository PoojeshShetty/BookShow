import {createContext, useReducer,useEffect} from 'react'
import { initialAuthState, authReducer } from '../reducer/AuthReducer'
import { projectAuth } from '../config/firebase'

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    
    const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState)

    return (
        <AuthContext.Provider value={{...authState,dispatchAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

