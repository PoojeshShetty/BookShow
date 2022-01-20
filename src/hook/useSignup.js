import {useState, useEffect} from 'react'
import {projectAuth,projectFirestore} from '../config/firebase'
import {useLoadingUtils} from '../hook/useLoadingUtils'
import { useAuthContext } from './useAuthContext'

function useSignup() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoaded, setLoading} = useLoadingUtils()
    const {dispatchAuth} = useAuthContext()

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    const signup = async(email,password,username) => {
        setError(null)
        setLoading()
        try{

            const res = await projectAuth.createUserWithEmailAndPassword(email,password)

            await projectFirestore.collection('users').doc(res.user.uid).set({
                username,
                email,
                type: 'user'
            })

            dispatchAuth({type: 'ADD_USERID',payload: res.user.uid})
            
            dispatchAuth({type:'LOGIN',payload:{uid:res.user.uid, username, email, type:'user'}})

        }catch(err)
        {
            if(!cancelled)
            {
                setError(err.message)
                setTimeout(()=> setError(null), 7000)
            }
        }
        setLoaded()
    }
    return {
        signup,
        error
    }
}

export default useSignup
