import React from 'react'
import useThemeContext from '../../hook/useThemeContext'
import Sidebar from '../sidebar/Sidebar'
import './Wrapper.css'

function Wrapper({children}) {

    const {theme, dispatchTheme} = useThemeContext()

    const toggleDarkMode = () => {
        dispatchTheme({type:'light'})
    }

    const toggleLightMode = () => {
        dispatchTheme({type: 'dark'})
    }

    return (
        <div className="App__container">
            {
                theme === "dark" ?
                <button className="theme__mode" onClick={toggleDarkMode}>
                    <img src="/svg/light.svg" alt="light" />
                </button> :
                <button className="theme__mode" onClick={toggleLightMode}>
                    <img src="/svg/dark.svg" alt="" />
                </button>
            }

            {children}
            <Sidebar />
        </div>
    )
}

export default Wrapper
