export default {
    setUserDetails(user){
        return localStorage.setItem("user",JSON.stringify(user));
    },

    getUserDetails(){
        return JSON.parse(localStorage.getItem("user"));
    },

    storeProductIdBeforeAuth(cart){
        return localStorage.setItem("savedProducts",JSON.stringify(cart));
    }
    ,
    getProductId(){
        return JSON.parse(localStorage.getItem("savedProducts"));
    },
    setToken(token){
        return localStorage.setItem('token',token);
    },
    getToken(){
        return localStorage.getItem('token')
    }

}