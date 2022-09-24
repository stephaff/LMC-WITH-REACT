const initialState = {
    products : []
};

export function productReducer(state = initialState, action){
    switch (action.type) {
        case 'GET-ALL-PRODUCTS':{
            return { ...state,
                products : action.payload
            };
        }
        default:{
            return state;
        }
    }
}