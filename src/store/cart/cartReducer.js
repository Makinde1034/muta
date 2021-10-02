import { ADD_TO_CART,GET_CART,GET_LOCAL_CART,SHOW_TOAST,CLOSE_TOAST,GET_TOTAL_PRICE } from "./cartType";



const initialState = {
    savedCartItems : [],
    authCart : [],
    toastMsg : '',
    price : ''
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
        case SHOW_TOAST:
            return {
                ...state,
                toastMsg : `you added  ${action.payload} to cart`

            }
        case CLOSE_TOAST:
            return {
                ...state,
                toastMsg : ''
            }
        case GET_TOTAL_PRICE:
            return {
                ...state,
                price : action.payload 
            }
        default: return state
    
    }
}

export default cartReducer;