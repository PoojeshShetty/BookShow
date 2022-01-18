import {useState,useEffect} from 'react'
import {projectFirestore} from '../config/firebase'
import { useLoadingUtils } from './useLoadingUtils'

function useMovie() {

    const [error,setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const {setLoading, setLoaded} = useLoadingUtils()
    const [success, setSuccess] = useState(null)

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

    const bookMovie = async (url,id, obj) => {

        setError(null)
        setLoading()
        
        try{

            console.log({url})
            await projectFirestore.collection(url).doc(id).set({
                bookedSeat: obj
            })
            
            setSuccess(true)

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
        error
    }
}

export {
    useMovie
} 
