import {useEffect,useState} from 'react'
import DateOption from '../../compenent/date/DateOption'
import './BookingPage.css'

const bookDate = [
    "15-01-2022",
    "20-01-2022"
]

function BookingPage() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const [dateOption, setDateOption] = useState(null)
    const [seats, setSeats] = useState(0)

    let val = bookDate.map(book => book.split("-"))
    console.log(val)

    return (
        <div className="bookingpage__container">
            <div className="movie__title">
                Avengers
            </div>
            <div className="bookdates">
                {
                    val.map((date,index) => (
                        <DateOption propsDate={date} dateOption={dateOption} setDateOption={setDateOption} key={index}/>
                    ))
                }
            </div>

            {
                (seats !== 0 && !dateOption) ? 
                <button>Book Seat</button>
                :
                <div>Select date and number of seats</div>
            }
        </div>
    )
}

export default BookingPage
