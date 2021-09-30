import { SIGN_UP_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_REQUEST } from "./authType";

const initialState ={
    loading : false,
    status : '',
    user : localStorage.getItem("user") || '',
    test : []

}

const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case SIGN_UP_REQUEST :
            return {
                ...state,
                loading : true,
                status : ''
    
            }    
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading : false,
                status : 'success',
                user : localStorage.getItem("user")
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading : false,
                status : 'error',
                email : ''

            }
        default: return state
        
    }
}

export default authReducer