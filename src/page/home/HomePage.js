import {useEffect,useState} from 'react'
import Movie from '../../compenent/movie/Movie'
import { projectFirestore } from '../../config/firebase'
import {Link} from 'react-router-dom'
import './HomePage.css'
import Loading from '../../compenent/loading/Loading'

function HomePage() {

    const [movies, setMovies] = useState(null)

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    useEffect(()=>{

        const getMovies = async () => {
            const res = await projectFirestore.collection('movies').get()

            if(!res.empty)
            {
                let result = []
                res.docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
                setMovies(result)
            }
        }
        getMovies()
    },[])

    if(!movies)
    return (
        <Loading />
    )
    
    const nowShowingMovies = movies.filter(movie => movie.status === 'nowshowing')

    const upComingMovies = movies.filter(movie => movie.status === 'upcoming')

    return (
        <div className="home__container">
            <div className="home__nowshowing">
                <div className="nowshowing__title">
                    Now Showing
                </div>

                <div className="movies">
                    {
                    nowShowingMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`}  key={movie.id}>
                            <Movie propsMovie={movie} />
                        </Link>
                    ))

                    }
                </div>
            </div>

            <div className="home__upcoming">
                <div className="upcoming__title">
                    Upcoming
                </div>

                <div className="movies">
                    {
                    upComingMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`}  key={movie.id}>
                            <Movie propsMovie={movie} />
                        </Link>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
