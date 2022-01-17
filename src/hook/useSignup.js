import {useState, useEffect} from 'react'
import {projectAuth} from '../config/firebase'
import {useLoadingUtils} from '../hook/useLoadingUtils'

function useSignup() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoaded, setLoading} = useLoadingUtils()

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    const signup = async(email,password,username) => {
        setError(null)
        setLoading()
        try{

            const res = await projectAuth.createUserWithEmailAndPassword(email,password)

            console.log(res.user)
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
