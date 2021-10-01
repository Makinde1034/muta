import axios from 'axios'
import storage from '../utils/storage.js'





const BASE_URL = process.env.REACT_APP_URL
const PRODUCT_URL = `${BASE_URL}/product`
const USER_URL = `${BASE_URL}/user`
const CART_URL = `${BASE_URL}/cart`


export default {
    getCustomerHeader(){
        let header = {
            Authorization: "bearer " + storage.getToken()
        }
        return header
    },
    getProduct(){
        return axios.get(`${PRODUCT_URL}/get-all-product`);
    },
    signUp(payload){
        return axios({url : `${USER_URL}/signup-customer`,data:payload, method:'POST'});
    },
    signIn(payload){
        return axios({url : `${USER_URL}/login`,data:payload, method:'POST'});
    },
    addToCart(payload){
        return axios.post(`${CART_URL}/add-to-cart`,payload,{
            headers:this.getCustomerHeader()
        })
    },
    getCart(){
        return axios.get(`${CART_URL}/get-cart`,{
            headers: this.getCustomerHeader()
        })
    },
    deleteFromCart(payload){
        return axios.post(`${CART_URL}/delete-from-cart`,payload,{
            headers:this.getCustomerHeader()
        });
    },

    removeFromCart(payload){
        return axios.post(`${CART_URL}/remove-from-cart`,payload,{
            headers:this.getCustomerHeader()
        })
    }
}

