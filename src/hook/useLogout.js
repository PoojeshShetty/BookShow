import {projectAuth} from '../config/firebase'
import { useAuthContext } from './useAuthContext'
import { useLoadingUtils } from './useLoadingUtils'

function useLogout() {

     const { setLoading, setLoaded} = useLoadingUtils()
     const {dispatchAuth} = useAuthContext()

    const logout = async () => {

        setLoading()

        try{

            await projectAuth.signOut()

            dispatchAuth({type:'LOGOUT'})

        }catch(err)
        {
            console.log(err.message)
        }

        setLoaded()
    }

    return {
        logout
    }
}

export{
    useLogout
} 
