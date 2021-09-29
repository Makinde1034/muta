export default {
    setUserDetails(user){
        return localStorage.setItem("user",JSON.stringify(user));
    },
    getUserDetails(){
        return JSON.parse(localStorage.getItem("user"));
    }

}