export const initialMovieState = {
    noOfSeats : 0,
    selectedSeats : [],
    selectedMovie : null,
    movieDate: null,
    totalPrice:0,
    liked : []
}

export const MovieReducer = (state, action) => {

    switch(action.type){
        case 'BOOK_MOVIE':
            return {...state, selectedMovie: action.payload}
        case 'BOOK_SEAT':
            return {...state, noOfSeats:action.payload.seats, movieDate: action.payload.date,selectedSeats : [],totalPrice:0}
        case 'ADD_SELECTED_SEAT':
            return {...state, selectedSeats: action.payload}
        case 'REMOVE_SELECTED_SEAT':
            return {...state, selectedSeats: action.payload}
        case 'ADD_PRICE':
            return {...state, totalPrice:action.payload}
        case 'SUBTRACT_PRICE':
            return {...state, totalPrice:action.payload}
        case 'RESET_BOOK':
            return {...state, noOfSeats : 0,selectedSeats : [],selectedMovie : null,movieDate: null,totalPrice:0}
        case 'ADD_LIKE_MOVIES':
            return {...state, liked:state.liked.concat({...action.payload})}
        case 'REMOVE_LIKE_MOVIES':
            return {...state, liked: action.payload}
        case 'LIKED_FROM_SERVER':
            return {...state, liked: action.payload}
        case 'LOGOUT':
            return {...initialMovieState}
        default:
            return state
    }
}


