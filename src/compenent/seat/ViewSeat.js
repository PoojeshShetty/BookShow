import React from 'react'
import { useMovieContext } from '../../hook/useMovieContext'
import './ViewSeat.css'

function ViewSeat({seat,price,booked,selected}) {

    const {dispatchMovie,noOfSeats,selectedSeats,totalPrice} = useMovieContext()

    const handleSelectedClick = () => {

        if(selectedSeats.length >= noOfSeats) return
        
        let newSelectedSeats = selectedSeats.concat({...seat})
        dispatchMovie({type:'ADD_SELECTED_SEAT',payload:newSelectedSeats})
        dispatchMovie({type:'ADD_PRICE',payload:totalPrice+Number(price)})
    }
    
    const handleUnSelectClick = () => {
        let newSelectedSeats = selectedSeats.filter(st=> st.i+"-"+st.j !== seat.i+"-"+seat.j)
        dispatchMovie({type:'REMOVE_SELECTED_SEAT',payload:newSelectedSeats})
        dispatchMovie({type:'SUBTRACT_PRICE',payload:totalPrice - Number(price)})
    }

    if(booked)
    return (
        <span 
            className="viewseat__container seat--booked"
            >

        </span>
    )

    if(selected)
    return (
        <span 
            className="viewseat__container seat--selected"
            onClick={handleUnSelectClick}
            >

        </span>
    )

    return (
        <span 
            className="viewseat__container seat--empty"
            onClick={handleSelectedClick}
            >

        </span>
    )
}

export default ViewSeat
