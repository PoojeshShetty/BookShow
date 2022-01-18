import {useState,useEffect} from 'react'
import {useLoadingUtils} from '../hook/useLoadingUtils'
import {projectAuth,projectFirestore} from '../config/firebase'
import { useAuthContext } from './useAuthContext'

function useLogin() {

    const {setLoaded, setLoading } = useLoadingUtils()
    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {dispatchAuth} = useAuthContext()

    useEffect(() => {
        
        return () => setCancelled(true)
    }, [])

    const login =  async (email,password) => {

        setError(null)
        setLoading()

        try{

            const res = await projectAuth.signInWithEmailAndPassword(email,password)

            const user = await projectFirestore.collection('users').doc(res.user.uid).get()

            dispatchAuth({type:'LOGIN',user:{uid:user.id, ...user.data()}})

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
        login,
        error
    }
}

export default useLogin
