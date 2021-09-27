import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productActionType";

const initialState = {
    products : [],
    loading : false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading : true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading : false,
                products : action.payload

            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading : false
            }
        default: return state
           
    }
}

export default productReducer;