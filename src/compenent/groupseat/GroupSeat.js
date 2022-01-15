import React from 'react'
import ViewSeat from '../seat/ViewSeat'
import './GroupSeat.css'
import {getSeatSize} from '../../utils/utils'

function GroupSeat({size,propsSeat,bookedSeats,selectedSeat,setSelectedSeat,setPrice}) {

    const {startRow, endRow, endColumn} = getSeatSize(size,propsSeat.start)
    console.log({selectedSeat})
    const seatDiv = []

    for(var i=startRow;i<=endRow;i++)
        {
            let a = []
            for(var j=1;j<=endColumn;j++)
                a.push({i,j})
            seatDiv.push(a)
        }
    
    return (
        <div className='groupseat__container'>
            <span>{propsSeat.type} : Rs {propsSeat.price}</span>
            
            {
                seatDiv.map((seats,index)=>
                   <div key={index} className='seat__row'>
                     {
                        seats.map((seat,index) => 
                            <ViewSeat 
                                booked={bookedSeats[seat.i][seat.j]===1}  
                                selected= {selectedSeat.map(st => st.i+"-"+st.j).includes(seat.i+"-"+seat.j)}
                                seat={seat} 
                                key={index} 
                                price={propsSeat.price}
                                selectedSeat={selectedSeat}
                                setSelectedSeat={setSelectedSeat}
                                setPrice={setPrice}
                            />
                        )
                     
                     }
                   </div> )
            }
        </div>
    )
}

export default GroupSeat
