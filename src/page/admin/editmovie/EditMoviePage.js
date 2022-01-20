import {useState,useEffect} from 'react'
import './EditMoviePage.css'
import { useParams,useHistory } from 'react-router-dom'
import { projectFirestore } from '../../../config/firebase'
import Loading from '../../../compenent/loading/Loading'
import { useMovie } from '../../../hook/useMovie'

function EditMoviePage() {

    const [name,setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [actors, setActors] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [description, setDescription] = useState('')
    const [bookingDates, setBookingDates] = useState('')
    const [status, setStatus] = useState('')
    const [actorName, setActorName] = useState('')
    const [date, setDate] = useState('')
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const {editMovie, deleteMovie, success} = useMovie()
    const history = useHistory()
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect(()=>{

        const getMovie = async () => {
            const res = await projectFirestore.collection('movies').doc(id).get()

            if(!res.exists)
                setMovie('notexists')
            else{
                const movieObj = {id:res.id, ...res.data()}
                setName(movieObj.name)
                setImgUrl(movieObj.imgUrl)
                setActors(movieObj.actors)
                setReleaseDate(movieObj.releaseDate)
                setDescription(movieObj.description)
                setStatus(movieObj.status)
                setBookingDates(movieObj.bookingDates)
                setMovie(movieObj)
            }
        }

        getMovie()
    },[id])

    useEffect(()=>{
        if(!success)
            return 
        
        history.push('/admin/viewmovies')

    },[success,history])

    if(!movie)
    return (
        <Loading />
    )

    if(movie==="notexists")
    return(
        <div className='page--info'>Following movie id does not exist</div>
    )

    const handleAddActors = (e) => {
        e.preventDefault()
        if(actorName === "")
            return
        setActors(actors.concat(actorName))
        setActorName('')
    }

    const handleAddDate = (e) => {
        e.preventDefault()
        if(date === "")
            return
        let newDate = date.split('-')
        
        setBookingDates(bookingDates.concat((newDate[2]+"-"+newDate[1]+"-"+newDate[0])))
        setDate('')
    }

    const handleSelectStatus = (e) => {
        e.preventDefault()
        setStatus(e.target.value)
    }

    const handleDeleteMovie = (e) => {
        e.preventDefault()
        
        deleteMovie(id)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        editMovie(movie.id,{
            name,
            imgUrl,
            actors,
            description,
            status,
            bookingDates,
            releaseDate
        })
    }

    const handleRemoveActors = (e) => {
        e.preventDefault()
        
        let actorArr = actors.concat()
        actorArr.pop()
        setActors(actorArr)
    }

    const handleRemoveBookingDates = (e) => {
        e.preventDefault()

        let bookingArr = bookingDates.concat()
        bookingArr.pop()
        setBookingDates(bookingArr)
    }

    return (
        <div className="editmovie__container">
            <form className="editmovie__form" onSubmit={(e) => handleFormSubmit(e)}>

               <div className="title">Edit Movie</div>
                <div className="form__control">
                    <label>Movie Name</label>
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} required/>
                </div>

                <div className="form__control">
                    <label>Movie Image Url</label>
                    <input type="text" value={imgUrl} onChange={({target}) => setImgUrl(target.value)} required/>
                </div>

                <div className="form__control">
                    <label>Movie Actors</label>
                    <div className="category__items">
                        {
                            actors.map((actor,index) => <span key={index}>{actor}</span>)
                        }
                        {
                            actors.length > 0 && 
                            <button className='btn' 
                                    onClick={(e) => handleRemoveActors(e)}>Remove</button>
                        }
                    </div>
                    <input 
                        type="text" 
                        value={actorName} 
                        onChange={({target}) => setActorName(target.value)} 
                    />
                    <button 
                        onClick={(e) => handleAddActors(e)}
                        className="btn">Add Actor</button>
                </div>

                <div className="form__control">
                    <label>Movie Description</label>
                    <textarea   
                        rows="4" 
                        type="text" 
                        value={description} 
                        onChange={({target}) => setDescription(target.value)} required/>
                </div>
                
                <div className="form__control">
                    <label>Movie Status</label>
                    <select value={status} onChange={(e) => handleSelectStatus(e)}>
                        <option value="nowshowing">Now Showing</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>

                <div className="form__control">
                    <label>Movie Booking Dates</label>
                    <div className="category__items">
                        {
                            bookingDates.map((dates,index) => <span key={index}>{dates}</span>)
                        }
                        {
                            bookingDates.length > 0 && 
                            <button className='btn' 
                                    onClick={(e) => handleRemoveBookingDates(e)}>Remove</button>
                        }
                    </div>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={({target}) => setDate(target.value)} 
                    />

                    <button 
                        onClick={(e) => handleAddDate(e)}
                        className="btn">Add Date</button>
                </div>

                
                <div className="form__control">
                    <label>Movie Release Date</label>
                    <input 
                        type="date" 
                        value={releaseDate} 
                        onChange={({target}) => setReleaseDate(target.value)} 
                        required
                    />
                </div>
                
                <button className="btn">Submit</button>
                
                <button className='btn btn--delete' onClick={(e) => handleDeleteMovie(e)}>Delete</button>
            </form>
        </div>
    )
}

export default EditMoviePage
