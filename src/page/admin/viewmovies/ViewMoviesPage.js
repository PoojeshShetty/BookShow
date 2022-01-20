import {useState,useEffect} from 'react'
import Movie from '../../../compenent/movie/Movie'
import './ViewMoviesPage.css'
import { Link } from 'react-router-dom'
import { projectFirestore } from '../../../config/firebase'
import Loading from '../../../compenent/loading/Loading'

function ViewMoviesPage() {

    const [movies, setMovies] = useState(null)
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(()=>{

        const getMovies = async () => {
            const res = await projectFirestore.collection('movies').get()

            if(!res.empty)
            {
                let result = []
                res.docs.forEach(doc => result.push({id:doc.id, ...doc.data()}))
                setMovies(result)
            }
            else
                setMovies([])
        }

        getMovies()
    },[])

    if(!movies)
    return(<Loading />)

    return (
        <div className="viewmovies__container">
            <div className="viewmovies__title">
                Movies
            </div>
            <div className="viewmovies">
                {
                    movies.map(movie => 
                       <div className='viewmovie' key={movie.id}>
                           <Movie propsMovie={movie} />
                           
                            <Link to={`/admin/editmovie/${movie.id}`} className='btn'>
                                Edit
                            </Link>
                       </div>)
                }
            </div>
        </div>
    )
}

export default ViewMoviesPage
