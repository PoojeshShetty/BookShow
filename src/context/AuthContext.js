import {createContext, useReducer,useEffect} from 'react'
import { initialAuthState, authReducer } from '../reducer/AuthReducer'
import { projectAuth,projectFirestore } from '../config/firebase'

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    
    const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState)

    const uid = authState.uid

    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged(user => {
            if(user)
                dispatchAuth({type: 'ADD_USERID',payload: user.uid})
            else    
                dispatchAuth({type: 'AUTH_READY', payload: null})
            unsub()
        })
    },[])

    useEffect(()=>{
        if(!uid)  return

        const getUser = async () => {
            const user = await projectFirestore.collection('users').doc(uid).get()

            dispatchAuth({type:'AUTH_READY',payload: {uid:user.id,...user.data()}})
        }

        getUser()
    },[uid])

    return (
        <AuthContext.Provider value={{...authState,dispatchAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

