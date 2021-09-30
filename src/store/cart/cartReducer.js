import { ADD_TO_CART,GET_CART,GET_LOCAL_CART } from "./cartType";



const initialState = {
    savedCartItems : [],
    authCart : []
}



const cartReducer = (state = initialState, action) =>{              
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                savedCartItems : JSON.parse(localStorage.getItem("savedProducts"))         
            }
    
        case GET_CART:
            return {
                ...state,
                authCart : action.payload
            }
        case GET_LOCAL_CART: 
            return {
                ...state,
                savedCartItems : JSON.parse(localStorage.getItem("savedProducts")) 
            }
        default: return state
    
    }
}

export default cartReducer;