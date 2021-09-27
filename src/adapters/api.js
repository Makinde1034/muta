import axios from 'axios'
const BASE_URL = process.env.REACT_APP_URL
const PRODUCT_URL = `${BASE_URL}/product`




export default {
    getProduct(){
        return axios.get(`${PRODUCT_URL}/get-all-product`);
    }
}