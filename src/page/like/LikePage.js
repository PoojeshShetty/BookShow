import { Link } from 'react-router-dom'
import Movie from '../../compenent/movie/Movie'
import { useMovieContext } from '../../hook/useMovieContext'
import './LikePage.css'
import {useEffect} from 'react'


function LikePage() {

    const {liked} = useMovieContext()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    if(liked.length === 0)
    return (
        <div className='page--info'>Liked Movie list is empty</div>
    )

    return (
        <div className="likepage__container">
            <div className="likepage__title">
                Liked Movies
            </div>
            <div className="likedmovies">
                {
                    liked.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <Movie propsMovie={movie} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default LikePage
