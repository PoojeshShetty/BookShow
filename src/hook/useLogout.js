import {projectAuth} from '../config/firebase'
import { useAuthContext } from './useAuthContext'
import { useLoadingUtils } from './useLoadingUtils'
import { useMovieContext } from './useMovieContext'

function useLogout() {

     const { setLoading, setLoaded} = useLoadingUtils()
     const {dispatchAuth} = useAuthContext()
     const {dispatchMovie} = useMovieContext()

    const logout = async () => {

        setLoading()

        try{

            await projectAuth.signOut()

            dispatchAuth({type:'LOGOUT'})
            dispatchMovie({type:'LOGOUT'})

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
