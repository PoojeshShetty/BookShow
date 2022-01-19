import {useEffect,useState} from 'react'
import DateOption from '../../compenent/date/DateOption'
import './BookingPage.css'
import AvailableSeats from '../../compenent/seats/AvailableSeats'
import { useMovieContext } from '../../hook/useMovieContext'
import { useHistory } from 'react-router-dom'

function BookingPage() {

    const {selectedMovie,dispatchMovie} = useMovieContext()
    const history = useHistory()
    const [dateOption, setDateOption] = useState(null)
    const [seats, setSeats] = useState(1)
    const [view ,setView] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0)
        if(!selectedMovie)
            history.push('/')
    })

    if(!selectedMovie)
        return(<div></div>)

    let val = selectedMovie.bookingDates.map(book => book.split('-'))

    const numberArray = [1,2,3,4,5,6,7,8,9,10]
    
    const handleBookSeat = () => {
        dispatchMovie({type:'BOOK_SEAT',payload:{seats, date:dateOption}})
        setView(true)
    }

    return (
        <div className="bookingpage__container">
            <div className="movie__title">
                Avengers
            </div>
            
            <div className="bookdates">
                <div className="date__title">Select Date</div>
                {
                    val.map((date,index) => (
                        <DateOption propsDate={date} dateOption={dateOption} setDateOption={setDateOption} key={index}/>
                    ))
                }
            </div>

            <div className="select__seats">
                <div className='seat__title'>Select Number of Seats</div>
                    {
                        numberArray.map(number => (
                            <span 
                                className={number===seats ? "seat selected" : "seat" }
                                onClick={() => setSeats(number)}
                                key={number}>
                                    {number}
                                </span>
                        ))
                    }
                
            </div>
            {
                (seats !== 0 && dateOption) ? 
                <button 
                    onClick={handleBookSeat}
                    className='btn'>Book Seat</button>
                :
                <div>Select date and number of seats</div>
            }

            {view && <AvailableSeats setView={setView} />}

        </div>
    )
}

export default BookingPage
