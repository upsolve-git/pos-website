export interface Cart {
    product_id:number,
    images:string[],
    name:string,
    quantity:number,
    price: number,
    discounted_price:number,
    discounted_business_price:number,
    shade_name : string,
    code : string,
    total : number,
    color_id : number
}