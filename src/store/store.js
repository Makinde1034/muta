import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productReducer';
import authReducer from './auth/authReducer';
import cartReducer from './cart/cartReducer';

const store = configureStore({
    reducer : {
        productReducer : productReducer,
        authReducer : authReducer,
        cartReducer : cartReducer
    }
})

export default store