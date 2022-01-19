import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import {useLogout} from '../../hook/useLogout'

function Sidebar() {

    const {logout} = useLogout()

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

                <li className="sidebar__item">
                    <Link to="/ticket">
                        <div className="item__info">
                            <div className="item__img">
                                <img src="/svg/ticket.svg" alt="ticket" />
                            </div>
                            <div className="item__txt">
                                Bookings
                            </div>
                        </div>
                    </Link>

                </li>

                <li className="sidebar__item">
                    <Link to="/like">
                        <div className="item__info">
                            <div className="item__img">
                                <img src="/svg/like.svg" alt="like" />
                            </div>
                            <div className="item__txt">
                                Liked
                            </div>
                        </div>
                    </Link>

                </li>

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
