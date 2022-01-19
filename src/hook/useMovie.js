import {useState,useEffect} from 'react'
import {projectFirestore} from '../config/firebase'
import { useAuthContext } from './useAuthContext'
import { useLoadingUtils } from './useLoadingUtils'
import { useMovieContext } from './useMovieContext'

function useMovie() {

    const [error,setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoading, setLoaded} = useLoadingUtils()
    const [success, setSuccess] = useState(null)
    const {user} = useAuthContext()
    const {selectedMovie,totalPrice, movieDate,dispatchMovie,liked} = useMovieContext()

    useEffect(()=>{

        return () => setCancelled(true)

    },[])


    const addMovie = async (obj) => {

        setError(null)
        setLoading()

        try{

            const doc = await projectFirestore.collection('movies').add({...obj})

            const bookingDates = obj.bookingDates

            const datesFirestore = bookingDates.map(date => projectFirestore.collection('movies').doc(doc.id).collection('booking').doc(date).set({
                bookedSeat : []
            }))

            await Promise.all(datesFirestore)

            setSuccess(true)

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }

        setLoaded()
    }

    const editMovie = async (id, obj) => {

        setError(null)
        setLoading()

        
        try{

            await projectFirestore.collection('movies').doc(id).set({...obj})
            
            setSuccess(true)

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }

        setLoaded()
    }

    const bookMovie = async (url,id, obj,selectedSeats) => {

        setError(null)
        setLoading()
        
        try{

            await projectFirestore.collection(url).doc(id).set({bookedSeat: obj})
            
            await projectFirestore.collection('bookings').doc(user.uid).collection('bookings').add({
                movie:selectedMovie,date:movieDate,seats:selectedSeats, price:totalPrice
            })

            dispatchMovie({type:'RESET_BOOK'})
            setSuccess(true)

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }

        setLoaded()
    }

    const addMovieToLike = async (movie) => {
        
        setError(null)
        setLoading()
        
        try{

            console.log("add movie like")
            await projectFirestore.collection('liked').doc(user.uid).collection('movies').doc(movie.id).set({...movie})

            dispatchMovie({type:'ADD_LIKE_MOVIES',payload:movie})

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }

        setLoaded()
    }

    const removeMovieFromLike = async (movie) => {

        setError(null)
        setLoading()

        try{

            await projectFirestore.collection('liked').doc(user.uid).collection('movies').doc(movie.id).delete()

            dispatchMovie({type:'REMOVE_LIKE_MOVIES',payload:liked.filter(val => val.id !== movie.id)})

        }catch(err)
        {
            if(!cancelled)
                setError(err.message)
        }

        setLoaded()

    }

    return {
        addMovie,
        editMovie,
        success,
        bookMovie,
        addMovieToLike,
        removeMovieFromLike,
        error
    }
}

export {
    useMovie
} 
