import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product/productReducer';

const store = configureStore({
    reducer : {
        productReducer : productReducer
    }
})

export default store