import {useState} from 'react'
import './AddMoviePage.css'

function AddMoviePage() {

    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [actorName, setActorName] = useState('')
    const [actors, setActors] = useState([])
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [bookingDates, setBookingDates] = useState([])
    const [date, setDate] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

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
        console.log({newDate})
        setBookingDates(bookingDates.concat((newDate[2]+"-"+newDate[1]+"-"+newDate[0])))
        setDate('')
    }

    const handleSelectStatus = (e) => {
        e.preventDefault()
        setStatus(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log({
            name,
            imgUrl,
            actors,
            description,
            status,
            bookingDates,
            releaseDate
        })
    }

    return (
        <div className="addmoviepage__container">
            <form className="addmovie__form" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="title">Add Movie</div>
                <div className="form__control">
                    <label>Movie Name</label>
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} />
                </div>

                <div className="form__control">
                    <label>Movie Image Url</label>
                    <input type="text" value={imgUrl} onChange={({target}) => setImgUrl(target.value)} />
                </div>

                <div className="form__control">
                    <label>Movie Actors</label>
                    <div className="category__items">
                        {
                            actors.map((actor,index) => <span key={index}>{actor}</span>)
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
                        onChange={({target}) => setDescription(target.value)} />
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
                    />
                </div>
                
                <button className="btn">Submit</button>

            </form>
        </div>
    )
}

export default AddMoviePage
