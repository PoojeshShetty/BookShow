import React from 'react'
import Sidebar from '../sidebar/Sidebar'

function Wrapper({children}) {
    return (
        <div className="App__container">
            {children}
            <Sidebar />
        </div>
    )
}

export default Wrapper
