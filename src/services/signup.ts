import axios from "../helpers/axios";

import { SIGNUP_ENDPOINT } from "../constants/routes";

export const signupReq = async (
    email: string|undefined, 
    password:string|undefined, 
    accType:string|undefined, 
    firstName:string|undefined, 
    lastName:string|undefined, 
    phone:string|undefined, 
    countryCode:string|undefined)=>{
    if(email && password && accType && firstName && lastName && phone && countryCode){
        let promise = axios.post(SIGNUP_ENDPOINT, {
            "email": email,
            "password": password,
            "first_name":firstName,
            "last_name":lastName,
            "phone_number":phone,
            "role":"user",
        }); 
        return promise
    } 
}