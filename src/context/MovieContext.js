import {createContext,useReducer} from 'react'
import { initialMovieState, MovieReducer } from '../reducer/MovieReducer'

export const MovieContext = createContext()

function MovieContextProvider({children}) {

    const [movieState, dispatchMovie] = useReducer(MovieReducer,initialMovieState)
    return (
        <MovieContext.Provider value={{...movieState,dispatchMovie}}>
            {children}
        </MovieContext.Provider>
            
    )
}

export default MovieContextProvider
