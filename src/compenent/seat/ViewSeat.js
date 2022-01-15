import React from 'react'
import './ViewSeat.css'

function ViewSeat({seat,price,booked,selectedSeat,setSelectedSeat,selected,setPrice}) {

    const handleSelectedClick = () => {
       setSelectedSeat(selectedSeat.concat({...seat}))
       setPrice((prevState) => Number(prevState)+Number(price))
    }
    
    const handleUnSelectClick = () => {
       setPrice((prevState) => Number(prevState) - Number(price))
       setSelectedSeat(selectedSeat.filter(st=> st.i+"-"+st.j !== seat.i+"-"+seat.j))
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
