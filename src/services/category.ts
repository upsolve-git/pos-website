import axios from "../helpers/axios";

import { ADD_CATEGORY_ENDPOINT, GET_CATEGORY_ENDPOINT } from "../constants/routes";

export const addCategoryReq = async (category_name: string|undefined)=>{
    if(category_name){
        return axios.post(ADD_CATEGORY_ENDPOINT, {
            "category_name": category_name
        });
    }
}

export const getCategoryReq = async ()=>{
    return axios.get(GET_CATEGORY_ENDPOINT);
}