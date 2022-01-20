import { useEffect,useState } from 'react'
import GroupSeat from '../groupseat/GroupSeat'
import './AvailableSeats.css'
import { getCharacterIndex, getSeatNumbers } from '../../utils/utils'
import { useMovieContext } from '../../hook/useMovieContext'
import { projectFirestore } from '../../config/firebase'
import Loading from '../loading/Loading'
import { useMovie } from '../../hook/useMovie'
import { useHistory } from 'react-router-dom'

// seat arrangement 
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


function Seats({setView}) {

    const {selectedSeats,noOfSeats,totalPrice,selectedMovie,movieDate} = useMovieContext()
    const [seatsBooked, setSeatsBooked] = useState(null)
    const {bookMovie, success} = useMovie()
    const history = useHistory()

    useEffect(()=>{
        const getBookedSeats = async () => {
            const res = await projectFirestore.collection("movies").doc(selectedMovie.id).collection('booking').doc(movieDate).get()

            if(res.exists)
            {
                setSeatsBooked({...res.data()})
            }
        }

        getBookedSeats()

    },[movieDate,selectedMovie])

    useEffect(()=>{

        if(!success) return

        history.push('/')
    },[success,history])

    if(!seatsBooked)
    return (
        <Loading />
    )

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

    // populate already booked seats to variable bookedSeats
    updateBookedSeats(bookedSeats,seatsBooked.bookedSeat)

    const handleBookTicket = () => {
        let selectedSeatNumbers = getSeatNumbers(selectedSeats)
        selectedSeatNumbers = selectedSeatNumbers.concat()
        
        bookMovie(`movies/${selectedMovie.id}/booking`,movieDate,selectedSeatNumbers.concat(seatsBooked.bookedSeat), selectedSeatNumbers)
    }
    
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('You are offline.... failed to load')
            return
        }

        const options = {
            key: "rzp_test_4o3uvRKN3BrjkH",
            currency: "INR",
            amount: totalPrice*100,
            name: "BigKart",
            description: "Thanks",
    
            handler: function (response) {
                handleBookTicket()
            }   
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

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
                        <button className='btn' onClick={displayRazorpay}>Book Ticket</button> :
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
