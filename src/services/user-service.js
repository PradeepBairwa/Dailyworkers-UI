import { myAxios } from "./helper";

export const signUp=(user)=>{
    console.log("from signup :"+user.email)

    return myAxios
    .post('/users/add',user)
    .then((response)=>response.data)
};