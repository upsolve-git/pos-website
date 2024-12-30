import { Color } from "./Color";

export interface Product {
    product_id: number;
    name: string;
    product_type : string;
    description:string;
    price:number;
    discounted_price:number;
    discounted_business_price: number;
    categories : string[];
    images:string[];
    colors : Color[]
}