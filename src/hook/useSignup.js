import {useState, useEffect} from 'react'
import {projectAuth} from '../config/firebase'

function useSignup() {

    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    const signup = async(email,password,username) => {

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
    }
    return {
        signup,
        error
    }
}

export default useSignup
