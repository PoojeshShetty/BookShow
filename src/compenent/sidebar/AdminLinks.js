import {Link} from 'react-router-dom'

function AdminLinks() {
    return (
        <>
            <li className="sidebar__item">
                <Link to="/admin/viewmovies">
                    <div className="item__info">
                        <div className="item__img">
                            <img src="/svg/movie.svg" alt="viewmovies" />
                        </div>
                        <div className="item__txt">
                            View Movies
                        </div>
                    </div>
                </Link>

            </li>

            <li className="sidebar__item">
                <Link to="/admin/addmovie">
                    <div className="item__info">
                        <div className="item__img">
                            <img src="/svg/add.svg" alt="add" />
                        </div>
                        <div className="item__txt">
                            Add Movies
                        </div>
                    </div>
                </Link>

            </li>
        </>
    )
}

export default AdminLinks
