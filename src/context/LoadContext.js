import {createContext, useReducer} from 'react'
import Loading from '../compenent/loading/Loading'
import {loadReducer,initialLoadState} from '../reducer/LoadReducer'

export const LoadContext = createContext()

function LoadContextProvider({children}) {

    const [loadState, dispatchLoad] = useReducer(loadReducer, initialLoadState)

    return (
        <LoadContext.Provider value={{...loadState, dispatchLoad}}>
            {children}
            {loadState.loading && <Loading />}
        </LoadContext.Provider>
    )
}

export default LoadContextProvider
