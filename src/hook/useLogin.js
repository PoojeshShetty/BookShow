import {useState,useEffect} from 'react'
import {useLoadingUtils} from '../hook/useLoadingUtils'
import {projectAuth} from '../config/firebase'

function useLogin() {

    const {setLoaded, setLoading } = useLoadingUtils()
    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        
        return () => setCancelled(true)
    }, [])

    const login =  async (email,password) => {

        setError(null)
        setLoading()

        try{

            const res = await projectAuth.signInWithEmailAndPassword(email,password)

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
        login,
        error
    }
}

export default useLogin
