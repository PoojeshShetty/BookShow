import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {useLogout} from '../../hook/useLogout'
import { useAuthContext } from '../../hook/useAuthContext'
import AdminLinks from './AdminLinks'
import UserLinks from './UserLinks'

function Sidebar() {

    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <div className="sidebar__container">
            <ul className='sidebar__items'>

                <li className="sidebar__item logo">
                    <Link to="/">
                        <div className="item__info">
                            <div className="item__img">
                                <img src="/svg/logo.svg" alt="logo" />
                            </div>
                            <div className="item__txt">
                                BookShow
                            </div>
                        </div>
                    </Link>

                </li>

                {
                    user && user.type==="admin" ?
                    <AdminLinks />
                    :
                    <UserLinks />
                }

                <li className="sidebar__item" onClick={() => logout()}>
                    <div className="item__info logout">
                        <div className="item__img">
                            <img src="/svg/logout.svg" alt="logout" />
                        </div>
                        <div className="item__txt">
                            Logout
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
