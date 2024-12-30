import axios from '../helpers/axios'

import { ADD_BEST_SELLER_ENDPOINT, ADD_NEW_SELLER_ENDPOINT, ADD_PRODUCT_ENDPOINT, GET_PRODUCT_ENDPOINT } from '../constants/routes';
import { Color } from '../interfaces/Color';

interface AddProdParams{
    name: string,
    images: File[],
    type: string,
    description: string,
    cost: number,
    discounted_price: number,
    categoryId: number[]
    colors : Color[]
    discounted_business_price: number,
}

export const addProductsReq = async (
    {name, images, type, description, cost, discounted_price, categoryId, colors, discounted_business_price}: AddProdParams
)=>{
    
    if(name && images.length && type && description && cost && discounted_price && categoryId && discounted_business_price){
        let formData = new FormData()
        formData.append('name', name)
        formData.append('product_type', type)
        formData.append('description', description)
        formData.append('price', cost.toString())
        formData.append('discounted_price', discounted_price.toString())
        formData.append('discounted_business_price', discounted_business_price.toString())
        formData.append('category_ids', categoryId.toString())
        images.forEach((file) => {
            formData.append(`images`, file);  // You can adjust the key as needed
          });
        formData.append('colors', JSON.stringify(colors))
        
        return axios.post(ADD_PRODUCT_ENDPOINT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
} 

export const getProductsReq = async ()=>{
    return axios.get(GET_PRODUCT_ENDPOINT);
}

export const addBestSellerReq = async (product_id : number)=>{
    
    if(product_id){
        return axios.post(ADD_BEST_SELLER_ENDPOINT, {
            "product_id": product_id
        });
    }
} 

export const addNewSellerReq = async (product_id : number)=>{
    
    if(product_id){
        return axios.post(ADD_NEW_SELLER_ENDPOINT, {
            "product_id": product_id
        });
    }
} 