import {useContext} from 'react'
import {MovieContext} from '../context/MovieContext'

function useMovieContext() {

    const context = useContext(MovieContext)

    if(!context)
      console.log("component should be inside movie context provider")

    return context
}

export{
    useMovieContext
} 
