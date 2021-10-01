import { ADD_TO_CART, GET_CART, GET_LOCAL_CART, ADD_TO_CART_FAILURE, SHOW_TOAST, CLOSE_TOAST, DELETE_FROM_CART } from "./cartType";
import api from "../../adapters/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const addToCart = (items)=>{
    return {
        type : ADD_TO_CART,
        payload : items
    }
}

export const getCart = (recentItems) =>{
    return {
        type : GET_CART,
        payload : recentItems
    }
}

export const getLocalCart = () =>{
    return {
        type: GET_LOCAL_CART
    }
}

export const deleteFromCart = () =>{
    return {
        type : DELETE_FROM_CART
    }
}

// export const showToast = (productName) => {
//     return  {
//         type : SHOW_TOAST,
//         payload : productName
//     }
// }

// export const closeToast = () => {
//     return {
//         type : CLOSE_TOAST
//     }
// }

// REMEMBER TO HANDLE ERROR HERE
export const addToCartFailure=() =>{
    return{
        type: ADD_TO_CART_FAILURE
    }
}

// add to cart
export const addItemToCart = (product) => {
    return (dispatch) => {
        const data = {
            product_id : product.id
        }
        api.addToCart(data).then((res)=>{
            dispatch(addToCart());
            // dispatch(showToast(product.name))
            toast(`you added ${product.name} to cart`)
            dispatch(getRecentCart())
            console.log(res,'you added a product to cart')
        }).catch(err=>{
            console.log(err,'error coccured while adding product to cart')
        })
    }
}

// increament product in cart
export const increament = (data) => {
    return (dispatch) => {
        api.addToCart(data).then((res)=>{
            dispatch(addToCart());
            dispatch(getRecentCart())
        }).catch(err=>{
            console.log(err,'error coccured while adding product to cart')
        })
    }
}

// delete from cart 

export const deleteItemFromCart = (data) =>{
    return (dispatch) => {
        api.deleteFromCart(data).then((res)=>{
            console.log(res)
            dispatch(getRecentCart());
        }).catch(err=>{
            console.log(err,"err while delting from cart");
        })
    }
}

// Update cart
export const getRecentCart = () =>{
    return (dispatch) => {
        api.getCart().then((res)=>{
            
            console.log(res,'you got cart');
            const{data:{data}} = res
            dispatch(getCart(data.cart.items))
        })
    }
}

export const getRecentCartFromLocalStorage = () =>{
    return (dispatch) => {
        dispatch(getLocalCart())
    }
}