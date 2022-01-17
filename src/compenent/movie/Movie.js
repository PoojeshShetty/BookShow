import React from 'react'
import './Movie.css'

function Movie({propsMovie}) {
    return (
        <div className="movie__info">
            <div className="movie__img">
                <img src={propsMovie.image} alt="movie" />
                <div className="like__btn btn--like">
                    <img src="/svg/like.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Movie
