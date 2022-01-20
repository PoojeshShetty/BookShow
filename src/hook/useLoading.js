import {useContext} from 'react'
import {LoadContext} from '../context/LoadContext'

function useLoading() {
    
    const context = useContext(LoadContext)

    if(!context)
        console.log("Define component in the load provider")

    return context
}

export{
    useLoading
} 
