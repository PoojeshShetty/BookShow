import React from 'react'
import './Movie.css'

function Movie({propsMovie}) {
    return (
        <div className="movie__info">
            <div className="movie__img">
                <img src={propsMovie.image} alt="movie" />
            </div>
        </div>
    )
}

export default Movie
