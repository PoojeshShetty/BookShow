import { useLoading } from './useLoading'

function useLoadingUtils() {

    const {dispatchLoad} = useLoading()

    const setLoading = () => {
        dispatchLoad({type:'LOADING'})
    }

    const setLoaded = () => {
        dispatchLoad({type:'LOADED'})
    }

    return {
        setLoading,
        setLoaded
    }
}

export {
    useLoadingUtils
} 
