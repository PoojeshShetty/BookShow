import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

function useAuthContext() {

    const context = useContext(AuthContext)

    if(!context)
        console.log("The component should be inside auth provider")

    return context
}

export default useAuthContext
