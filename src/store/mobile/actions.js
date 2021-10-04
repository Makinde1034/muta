import { TOGGLE_NAV,CLOSE_NAV } from "./actionType";

export const toggleNav = () =>{
    return{
        type :TOGGLE_NAV
    }
}

export const closeNav = () =>{
    return{
        type : CLOSE_NAV
    }
}