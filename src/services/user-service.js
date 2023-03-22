import { myAxios } from "./helper";

//signIn
export const signUp=(user)=>{
    console.log("from signup :"+user.email)

    return myAxios
    .post('/users/add',user)
    .then((response)=>response.data)
};
//Login
export const logIn=(user)=>{
    console.log("from signup :"+user.email)

    return myAxios
    .post('/users/login',user)
    .then((response)=>response.data)
};