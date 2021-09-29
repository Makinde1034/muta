import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productReducer';
import authReducer from './auth/authReducer';

const store = configureStore({
    reducer : {
        productReducer : productReducer,
        authReducer : authReducer
    }
})

export default store