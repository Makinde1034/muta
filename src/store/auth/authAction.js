import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./authType";
import api from "../../adapters/api";
import storage from "../../utils/storage";

export const authRequest = () =>{
    return {
        type:SIGN_UP_REQUEST
    }
}

export const authSuccess = (user) =>{
    return {
        type : SIGN_UP_SUCCESS,
        payload : user
    }
}

export const authFailure = (error) =>{
    return {
        type : SIGN_UP_FAILURE,
        payload : error
    }
}

export const signUpUser = (payload) =>{
    return (dispatch) => {
        dispatch(authRequest())
        api.signUp(payload).then((res)=>{
            console.log(res);
            storage.setUserDetails(res.data.data.user);
            dispatch(authSuccess());

        }).catch(err=>{
            console.log(err);
            dispatch(authFailure(err));
        })
    }
}

export const signInUser = (payload) =>{
    return (dispatch) => {
        dispatch(authRequest())
        api.signIn(payload).then((res)=>{
            console.log(res)
            storage.setUserDetails(res.data.data.user);
            dispatch(authSuccess());
        }).catch((err)=>{
            console.log(err);
            dispatch(authFailure(err));
        })
    }
}