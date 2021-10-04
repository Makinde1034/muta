import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productReducer';
import authReducer from './auth/authReducer';
import cartReducer from './cart/cartReducer';
import mobileReducer from './mobile/mobileReducer';

const store = configureStore({
    reducer : {
        productReducer : productReducer,
        authReducer : authReducer,
        cartReducer : cartReducer,
        mobileReducer : mobileReducer
    }
})

export default store