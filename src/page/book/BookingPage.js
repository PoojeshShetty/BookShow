import {useEffect,useState} from 'react'
import DateOption from '../../compenent/date/DateOption'
import './BookingPage.css'
import AvailableSeats from '../../compenent/seats/AvailableSeats'

const bookDate = [
    "15-01-2022",
    "16-01-2022",
    "20-01-2022"
]

function BookingPage() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const [dateOption, setDateOption] = useState(null)
    const [seats, setSeats] = useState(1)
    const [view ,setView] = useState(false)

    let val = bookDate.map(book => book.split("-"))

    const numberArray = [1,2,3,4,5,6,7,8,9,10]
    console.log(dateOption)
    
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
                    onClick={() => setView(true)}
                    className='btn'>Book Seat</button>
                :
                <div>Select date and number of seats</div>
            }

            {view && <AvailableSeats setView={setView} />}

        </div>
    )
}

export default BookingPage
