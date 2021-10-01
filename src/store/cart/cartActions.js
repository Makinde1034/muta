import { ADD_TO_CART, GET_CART, GET_LOCAL_CART, ADD_TO_CART_FAILURE, SHOW_TOAST, CLOSE_TOAST } from "./cartType";
import api from "../../adapters/api";



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

export const showToast = (productName) => {
    return  {
        type : SHOW_TOAST,
        payload : productName
    }
}

export const closeToast = () => {
    return {
        type : CLOSE_TOAST
    }
}

// REMEMBER TO HANDLE ERROR HERE
export const addToCartFailure=() =>{
    return{
        type: ADD_TO_CART_FAILURE
    }
}

export const addItemToCart = (product) => {
    return (dispatch) => {
        const data = {
            product_id : product.id
        }
        api.addToCart(data).then((res)=>{
            dispatch(addToCart());
            dispatch(showToast(product.name))
            setTimeout(() => {
                dispatch(closeToast())
            }, 3000);
            dispatch(getRecentCart())
            console.log(res,'you added a product to cart')
        }).catch(err=>{
            console.log(err,'error coccured while adding product to cart')
        })
    }
}

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