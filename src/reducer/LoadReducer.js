const loadReducer = (state, action) => {
    
    switch(action.type){
        case 'LOADING':
            return {loading:true}
        case 'LOADED':
            return {loading:false}
        default:
            return state
    }
}

const initialLoadState = {
    loading:false
}

export {
    loadReducer,
    initialLoadState
} 
