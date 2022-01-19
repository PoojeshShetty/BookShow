import React from 'react'
import { useMovie } from '../../hook/useMovie'
import { useMovieContext } from '../../hook/useMovieContext'
import './Movie.css'

function Movie({propsMovie}) {

    const {liked} = useMovieContext()
    const {addMovieToLike, removeMovieFromLike} = useMovie()

    const handleAddLike = (e) => {
        e.preventDefault()
        addMovieToLike(propsMovie)
    }

    const handleRemoveLike = (e) => {
        e.preventDefault()
        removeMovieFromLike(propsMovie)
    }

    console.log({liked})
    return (
        <div className="movie__info">
            <div className="movie__img">
                <img src={propsMovie.imgUrl} alt="movie" />
                {
                    liked.map(movie=> movie.id).includes(propsMovie.id) ?
                    <div className="like__btn btn--like" onClick={(e) => handleRemoveLike(e)}>
                        <img src="/svg/like.svg" alt="" />
                    </div> :
                    <div className="like__btn" onClick={(e) => handleAddLike(e)}>
                        <img src="/svg/like.svg" alt="" />
                    </div>  
                }
            </div>
        </div>
    )
}

export default Movie
