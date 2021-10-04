import { TOGGLE_NAV,CLOSE_NAV } from "./actionType";

const initialState = {
    isNavOpen : false
}

const mobileReducer = (state=initialState,action) => {
    switch(action.type){
        case TOGGLE_NAV:
            return {
                ...state,
                isNavOpen : !state.isNavOpen
            }
        case CLOSE_NAV:
            return {
                ...state,
                isNavOpen : false
            }
        default: return state
    }
}

export default mobileReducer