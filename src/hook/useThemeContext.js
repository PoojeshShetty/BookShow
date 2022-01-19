import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

function useThemeContext() {

    const context = useContext(ThemeContext)

    if(!context)
        console.log("The component should be part of theme context")
    
    return context
}

export default useThemeContext
