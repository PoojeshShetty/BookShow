import {createContext,useReducer} from 'react'
import {ThemeReducer} from '../reducer/ThemeReducer'

export const ThemeContext = createContext()

function ThemeContextProvider({children}) {

    const [themeState, dispatchTheme] = useReducer(ThemeReducer,{theme:'dark'})

    return (
        <ThemeContext.Provider value={{...themeState,dispatchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
