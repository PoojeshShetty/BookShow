import { useState,useEffect } from 'react'
import {projectFirestore} from '../config/firebase'
import { useLoadingUtils } from './useLoadingUtils'

function useCollection(collection) {

    const {setLoading, setLoaded} = useLoadingUtils()
    const [error, setError] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const [document, setDocument] = useState(null)

    const res = projectFirestore.collection(collection)

    useEffect(()=>{
        
        return () => setCancelled(true)
    },[])

    const addDocument = async (obj) => {

        setError(null)
        setLoading()

        try{

            const doc = await res.add({...obj})

            setDocument({id:doc.id})

        }catch(err)
        {
            if(!cancelled)
             setError(err.message)
        }

        setLoaded()
    }
   
    const addDocumentUrl = async (url, obj) => {

        setError(null)
        setLoading()

        try{

            const doc = await projectFirestore.collection(url).add({obj})

            setDocument({id:doc.id})

        }catch(err)
        {
            if(!cancelled)
             setError(err.message)
        }

        setLoaded()

        return document
    }

    return{
        addDocument,
        addDocumentUrl,
        error
    }
}

export{
    useCollection
} 
