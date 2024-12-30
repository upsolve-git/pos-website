import { Address } from "./Address"
import { OrderLine } from "./OrderLine"

export interface Order {
    order_id : number,
    user_id:number,
    invoice : string,
    creation_date : number,
    confirmation_date : number,
    shipping_date : number,
    delivered_date : number
    products : OrderLine[]
    address : Address
    status : string,
    total : number
} 