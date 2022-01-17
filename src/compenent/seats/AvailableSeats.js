import GroupSeat from '../groupseat/GroupSeat'
import './AvailableSeats.css'
import { getCharacterIndex, getSeatNumbers } from '../../utils/utils'
import { useMovieContext } from '../../hook/useMovieContext'

const seats = {
    'B-15' : {
        start:'A',
        price:'150',
        type: 'Premium'
    }, 
    'G-15' : {
        start:'C',
        price:'120',
        type:'Executive'
    },
    'K-15' : {
        start:'H',
        price: '90',
        type:'Normal'
    }
}

const bookedSeatsInit = [
    "a-15", "b-5","k-15","k-1","a-1","a-5","d-5","b-15","c-9","f-9","e-13"
]

function Seats({setView}) {

    const {selectedSeats,noOfSeats,totalPrice} = useMovieContext()

    let bookedSeats = new Array(12)
    for(var i=0;i<11;i++)
    {
        bookedSeats[i] = new Array(16)
        for(var j=1;j<16;j++)
           bookedSeats[i][j] = 0;
    }

    const updateBookedSeats = (arr1, bookedSeatsInit) => {
        bookedSeatsInit.forEach(element => {
            const [rowChar, column] = element.split('-')
            const row = getCharacterIndex(rowChar)

            arr1[row][column] = 1
        });
    }

    updateBookedSeats(bookedSeats,bookedSeatsInit)

    const handleBookTicket = () => {
        let selectedSeatNumbers = getSeatNumbers(selectedSeats)
        console.log({selectedSeatNumbers})
    }

    return (
        <div className="availableseats__container">

            
            <div className="availableseats">
                <div className="seats__indicators">
                    <span className="seat__marker">
                        <label>Empty seat</label>
                        <span className='seat--empty'></span>
                    </span>
                    <span className="seat__marker">
                        <label>Selected seat</label>
                        <span className='seat--selected'></span>
                    </span>
                    <span className="seat__marker">
                        <label>Booked seat</label>
                        <span className='seat--booked'></span>
                    </span>


                </div>
                {
                    Object.keys(seats).map((key,index) => (
                        <GroupSeat size={key} propsSeat={seats[key]} key={index}
                            bookedSeats={bookedSeats}
                        />
                    ))
                }

                <div className="availableseats__btn">

                    {
                        selectedSeats.length === noOfSeats ?
                        <button className='btn' onClick={handleBookTicket}>Book Ticket</button> :
                        <button className='btn btn--disabled' disabled>Book Ticket</button>
                    }

                    <button
                        className='btn'
                        onClick={()=>setView(false)}
                        >cancel</button>
                    <span className='ticket__price'>Total : Rs {totalPrice}</span>

                </div>
            </div>
        </div>
    )
}

export default Seats
