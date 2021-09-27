import { FETCH_PRODUCTS,FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "./productActionType";
import api from '../../adapters/api.js'
// import axios from 'axios'

export const getProducts = (products) =>{
    return {
        type:FETCH_PRODUCTS,
        
    }
}

export const getUserSuccess = (products) => {
    return {
        type : FETCH_PRODUCTS_SUCCESS,
        payload : products
    }
}

export const getUserFailure = (error) => {
    return {
        type : FETCH_PRODUCTS_FAILURE,
        payload : error
    }
}

export const fetchProducts =() => {
    return (dispatch) => {
            api.getProduct()
            .then((res)=>{
            console.log(res);
            dispatch(getUserSuccess(res.data.data));
        }).catch((err)=>{
            dispatch(getUserFailure(err.message))
        })
    }
}