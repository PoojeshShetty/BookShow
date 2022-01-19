import {useState, useEffect} from 'react'
import Loading from '../../compenent/loading/Loading'
import { projectFirestore } from '../../config/firebase'
import { useAuthContext } from '../../hook/useAuthContext'
import './TicketsBookedPage.css'

function TicketsBookedPage() {

    const {user} = useAuthContext()
    const [bookings, setBookings] = useState(null)

    useEffect(()=>{

        const viewBookedTickets = async () => {
            const res = await projectFirestore.collection('bookings').doc(user.uid).collection('bookings').get()

            if(!res.empty)
            {
                let result = []
                res.docs.forEach(doc => result.push({id:doc.id, ...doc.data()}))
                console.log(new Date(result[0].date.toString()))
                setBookings(result)
            }
            else
                setBookings("empty")
        }

        viewBookedTickets()

    },[user])

    if(!bookings)
    return(
        <Loading />
    )

    if(bookings === "empty")
    return (
        <div>No booked tickets to view</div>
    )

    console.log({bookings})
    return (
        <div className="ticket__container">
            <div className="viewtickets">
                {
                    bookings.map(ticket => (
                        <div key={ticket.id} className="bookedmovie__ticket">
                            <div className="bookedmovie__info">
                                <div className="bookedmovie__name">
                                    {ticket.movie.name}
                                </div>
                                <div className="bookedmovie__date">
                                    Date - {ticket.date}
                                </div>
                                <div className="bookedmovie__seats">
                                    Seats - {
                                        ticket.seats.map((seat,index) => (
                                            <span key={index} className='bookedmovie__seat'>{seat}</span>
                                        ))
                                    }
                                </div>
                                <div className="total__price">
                                    Total Price - Rs {ticket.price}
                                </div>
                            </div>
                            <div className="bookedmovie__img">
                                <img src={ticket.movie.imgUrl} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TicketsBookedPage
