import {useEffect,useState} from 'react'
import { useMovieContext } from '../../hook/useMovieContext'
import { useHistory,useParams } from 'react-router-dom'
import { projectFirestore } from '../../config/firebase'
import './MovieViewPage.css'
import Loading from '../../compenent/loading/Loading'

function MovieViewPage() {

    const [movie, setMovie] = useState(null)
    const {dispatchMovie} = useMovieContext()
    const {id} = useParams()
    const history = useHistory()

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    useEffect(()=>{

        const getMovie = async () => {
            const res = await projectFirestore.collection('movies').doc(id).get()
            if(res.exists)
                setMovie({id:res.id,...res.data()})
            else    
                setMovie("notexist")
        }
        getMovie()

    },[id])

    if(!movie)
    return (
        <Loading />
    )

    if(movie==="notexist")
    return (
        <div className='page--info'>Movie does not exist</div>
    )

    const handleBookClick = () => {
        dispatchMovie({type:'BOOK_MOVIE',payload:movie})
        history.push('/book')
    }

    return (
        <div className="moviepage__container">
            <div className="moviepage__main">
                <div className="moviepage__view">
                    <div className="moviepage__image">
                        <img src={movie.imgUrl} alt="movie" />
                        {
                            movie.status === "nowshowing" && 
                            <button 
                            onClick={handleBookClick}
                            className='btn'>Book</button>
                        }
                    </div>

                    <div className='moviepage__summary'>
                        <div className="moviepage__info">
                            <div className="moviepage__name">
                                {movie.name}
                            </div>
                            <div className="moviepage__actors">
                                <span className="cast">Cast - </span>{movie.actors.map(actor => actor + " | ")}
                            </div>
                            <div className="moviepage__date">
                                <span className="date">Release Date - </span>{movie.releaseDate}
                            </div>
                        </div>
                        <div className="moviepage__description">
                           <div className="summary">Summary - </div> {movie.description}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieViewPage
