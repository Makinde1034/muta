import { ADD_TO_CART, GET_CART, GET_LOCAL_CART } from "./cartType";
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

export const addItemToCart = (payload) => {
    return (dispatch) => {
        api.addToCart(payload).then((res)=>{
            dispatch(addToCart());
            dispatch(getRecentCart())
            console.log(res,'you added a product to cart')
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