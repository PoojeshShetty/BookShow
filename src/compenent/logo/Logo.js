import React from 'react'
import './Logo.css'

function Logo() {
    return (
        <div className="logo__container">
            <div className="logo__txt">
                BookShow
            </div>
            <div className="logo__img">
                <img src="/svg/logo.svg" alt="logo" />
            </div>
        </div>
    )
}

export default Logo
