import {useState} from 'react'
import './EditMoviePage.css'

const movie = {
    id: 1,
    name: "Avengers",
    image: "https://i.pinimg.com/originals/85/00/ba/8500ba1dd8868063379c9a1221fe351f.jpg",
    actors: ["actor1", "actor2", "actor3"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloribus dignissimos minus omnis aliquid modi molestiae tenetur quia quisquam fuga unde, rerum repellat est ex accusantium neque deleniti illum tempora!",
    releaseDate: "2019-04-12",
    status: "nowshowing",
    bookingDates : ['22-01-2022', '28-01-2022']
}

function EditMoviePage() {

    const [name,setName] = useState(movie.name)
    const [imgUrl, setImgUrl] = useState(movie.image)
    const [actors, setActors] = useState(movie.actors)
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate)
    const [description, setDescription] = useState(movie.description)
    const [bookingDates, setBookingDates] = useState(movie.bookingDates)
    const [status, setStatus] = useState(movie.status)
    const [actorName, setActorName] = useState('')
    const [date, setDate] = useState('')
    
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
                    />
                </div>
                
                <button className="btn">Submit</button>


            </form>
        </div>
    )
}

export default EditMoviePage
