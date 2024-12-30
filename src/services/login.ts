import axios from "../helpers/axios";

import { ADD_REVIEW, ADMIN_AUTH, ADMIN_CONFIRM_ORDER, ADMIN_DELIVER_ORDER, ADMIN_LOGIN_ENDPOINT, ADMIN_ORDERS, ADMIN_SHIP_ORDER, CAPTURE, DELETE_FROM_CART, GET_AUTH_REQ, GET_CART, GET_DEFAULT_ADDRESS, GET_ORDER, GET_ORDERS, GET_USERS_ENDPOINT, GOOGLE_SIGNIN, LANDING_PAGE, LOGIN_ENDPOINT, LOGOUT_REQ, PAY, PLACE_ORDER, UPDATE_CART } from "../constants/routes";
import { Address } from "../interfaces/Address";
import { Cart } from "../interfaces/Cart";

export const loginReq = async (email: string|undefined, password:string|undefined)=>{
    if(email && password){
        return axios.post(LOGIN_ENDPOINT, {
            "email": email,
            "password": password
        });
    }
} 

export const googleAuthReq = async (email : string, first_name : string, last_name : string) => {
    if (email && first_name && last_name){
        return axios.post(GOOGLE_SIGNIN, {
            "email" : email,
            "first_name" : first_name,
            "last_name" : last_name
        })
    }
}

export const getAuthReq = async() => {
    return axios.get(GET_AUTH_REQ)
}

export const logoutReq = async() => {
    return axios.post(LOGOUT_REQ)
}

export const getUsersReq = async() => {
    return axios.get(GET_USERS_ENDPOINT)
}

export const getUsersCartReq = async(user_id:number) => {
    return axios.get(GET_CART);
} 

export const getUserDefaultAddressReq = async() => {
    return axios.get(GET_DEFAULT_ADDRESS)
}

export const updateUsersCartReq = async(product_id : number, quantity : number, color_id : number) => {
    if(product_id && quantity && color_id) {
        return axios.post(UPDATE_CART, {
            "product_id":product_id,
            "quantity":quantity,
            "color_id":color_id
        })
    }
}

export const deleteFromUsersCartReq = async(product_id : number, color_id : number) => {
    if(product_id && color_id) {
        return axios.post(DELETE_FROM_CART, {
            "product_id":product_id,
            "user_id":color_id
        })
    }
}

export const placeOrderReq = async(payment_id : string, address: Address, cartItems : Cart[]) => {
    if(payment_id && address && cartItems.length) {
        return axios.post(PLACE_ORDER, {
            "payment_id" : payment_id,
            "address" : address,
            "cartItems" : cartItems
        })
    }
}

export const getOrdersReq = async() => {
      return axios.get(GET_ORDERS)
}

export const createPayment = async(amount : number) => {
    if(amount) {
        return axios.post(PAY, {
            "amount" : amount
        })
    }
}

export const capturePayment = async(orderId : string) => {
    if(orderId) {
        return axios.post(CAPTURE, {
            "orderId"  : orderId
        })
    }
}

export const adminLoginReq = async(email: string, password : string) => {
    if(email && password) {
        return axios.post(ADMIN_LOGIN_ENDPOINT, {
            "email" : email,
            "password" : password
        })
    } 
}

export const addReviewReq = async(rating : number, review : string, product_id : number) => {
    if(rating && review && product_id) {
        return axios.post(ADD_REVIEW, {
            "product_id" : product_id,
            "rating" : rating,
            "review" : review
        })
    }
}

export const getAdminAuth = async() => {
    return axios.get(ADMIN_AUTH)
}

export const getAdminOrders = async() => {
    return axios.get(ADMIN_ORDERS)
}

export const postConfirmOrder = async(order_id : number) => {
    if (order_id) {
        return axios.post(ADMIN_CONFIRM_ORDER, {
            "order_id": order_id
        })
    }
}

export const postShipOrder = async(order_id : number) => {
    if (order_id) {
        return axios.post(ADMIN_SHIP_ORDER, {
            "order_id": order_id
        })
    }
}

export const postDeliverOrder = async(order_id : number) => {
    if (order_id) {
        return axios.post(ADMIN_DELIVER_ORDER, {
            "order_id": order_id
        })
    }
}

export const getOrderReq = async(order_id : number) => {
    if(order_id) {
        console.log(GET_ORDER + order_id)
        return axios.get(GET_ORDER + order_id)
    }
}

export const getLandingPage = async() => {
    return axios.get(LANDING_PAGE)
}