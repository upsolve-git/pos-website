import React from "react";
import { Product } from "../../../interfaces/Product";
import { FiShoppingCart } from "react-icons/fi";

interface ProductPreviewCardProps{
    product : Product
    onClick : (product_id : number) => void
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
    product,
    onClick
})=>{
    return (
        <div
        className="grid grid-cols-1 font-poppins max-w-[200px] max-h-fit">
            <div
            className="bg-white rounded-t-full px-3 py-4 desktop:px-6 desktop:py-8">
                <img src={`${product.images[0]}?${new Date().getDate()}`} alt="" 
                className="w-auto h-[200px] m-auto tablet:w-[100px] desktop:w-[130px]"/>
            </div>
            <div
            className="w-full h-full flex flex-col bg-secondarylight  px-2 pt-1 pb-2 rounded-b-2xl">
                <div
                className="h-[80%] w-full flex justify-between">
                    <div>
                        <p
                        className="w-[100%] block font-semibold text-xs line-clamp-2 desktop:text-md">
                            {product.name}
                        </p>
                        <p
                        className="w-[100%] line-clamp-1 font-light text-xxs desktop:text-sm">
                            {product.description}
                        </p>
                    </div>
                    <button
                        className="max-h-[50%] w-auto desktop:h-[40%] bg-primary text-white px-2 rounded-2xl text-4xs mb-3 tablet:text-3xs desktop:text-xs"
                        onClick={()=>onClick(product.product_id)}>
                        Add
                    </button>
                </div>
                <div
                className="h-fit flex items-center justify-between">
                    <div
                    className="w-fit flex justify-between items-center">
                        <span
                        className="text-sm font-semibold mr-1 tablet:text-md desktop:text-xl">
                            ${product.discounted_price}
                        </span>
                        <span
                        className="text-darkgray text-xs tablet:text-xs desktop:text-md">
                            <s>${product.price}</s>
                        </span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white items-center justify-center "> 
                        <FiShoppingCart className="mt-2 ml-1" style={{fontSize:"1.8rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreviewCard