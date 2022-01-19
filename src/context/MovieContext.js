import {createContext,useReducer,useEffect} from 'react'
import { useAuthContext } from '../hook/useAuthContext'
import { initialMovieState, MovieReducer } from '../reducer/MovieReducer'
import { projectFirestore } from '../config/firebase'

export const MovieContext = createContext()

function MovieContextProvider({children}) {

    const [movieState, dispatchMovie] = useReducer(MovieReducer,initialMovieState)
    const {uid} = useAuthContext()

    useEffect(()=>{
        if(!uid) return

        const getLikedMovies = async () => {

            const res = await projectFirestore.collection('liked').doc(uid).collection('movies').get()

            if(!res.empty){
                let result = []
                res.docs.forEach(doc => result.push({id:doc.id, ...doc.data()}))
                dispatchMovie({type:'LIKED_FROM_SERVER',payload:result})
            }
        }

        getLikedMovies()

    },[uid])
    
    return (
        <MovieContext.Provider value={{...movieState,dispatchMovie}}>
            {children}
        </MovieContext.Provider>
            
    )
}

export default MovieContextProvider
