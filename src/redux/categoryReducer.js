const initialState = {
    categories : []
}

export function categoryReducer(state = initialState, action){
    switch(action.type){
        case 'GET-ALL-CATEGORIES':{
            return {
                ...state,
                categories : action.payload
            }
        }
    default :{
        return state;
    }
    }
}