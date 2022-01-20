const letterIndex = "abcdefghijklmnopqrstuvwxyz"

export const getSeatSize = (val,start) => {
    let [n,m] = val.split("-")
    n = n.toLowerCase()
    n = letterIndex.indexOf(n)
    let startRow = letterIndex.indexOf(start.toLowerCase())

    return{
        startRow:startRow,
        endRow:n,
        endColumn:m,
    }
}

export const getCharacterIndex = (char) => {
    return letterIndex.indexOf(char.toLowerCase())
}

const calendar = {
    "01" : "Jan",
    "02" : "Feb",
    "03" : "Mar",
    "04" : "Apr",
    "05" : "May",
    "06" : "Jun",
    "07" : "Jul",
    "08" : "Aug",
    "09" : "Sep",
    "10" : "Oct",
    "11" : "Nov",
    "12" : "Dec"
}

export const getMonth = (monthNumber) => {
    return calendar[monthNumber]
}

export const getSeatNumbers = (selectedSeats) => {
    return selectedSeats.map(seats => 
        letterIndex.charAt(seats.i).toUpperCase()+"-"+seats.j
    ).sort()
}