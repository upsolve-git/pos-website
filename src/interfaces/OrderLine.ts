export interface OrderLine {
    product_id:number,
    images:string[],
    name:string,
    quantity:number,
    price : number,
    shade_name : string, 
    code : string,
    category?: string
    color_id : number
}