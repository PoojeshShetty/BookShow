import React from 'react'
import './DateOption.css'
import {getMonth} from '../../utils/utils'

function DateOption({propsDate, dateOption, setDateOption}) {

    const month = getMonth(propsDate[1])

    const handleSaveDate = () => {
        setDateOption(propsDate[0]+"-"+propsDate[1])
    }

    return (
        <div onClick={handleSaveDate} 
             className={(dateOption && dateOption === (propsDate[0]+"-"+propsDate[1])) ?
                                        "dateoption selected" : "dateoption"}>
            <span className="month">
                {propsDate[0]}
            </span>
            <span className="date">
                {month}
            </span>
        </div>
    )
}

export default DateOption
