import {Link} from 'react-router-dom'

function UserLinks() {
    return (
        <>
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
        </>
    )
}

export default UserLinks
