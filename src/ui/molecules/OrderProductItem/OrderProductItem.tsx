import React from "react";

import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

import { OrderLine } from "../../../interfaces/OrderLine";
import { useNavigate } from 'react-router-dom';

import { useCartPage } from "../../../utils/hooks/useCartPage";

interface OrderProductItemProps{
    orderProduct: OrderLine,
    setIsAddReviewOpen? : (isOpen : boolean) => void,
    setproductId? :  (productId:number) => void,
    deleteProduct?: ()=>void,
    productId?: number,
    colorId?: number
}

const OrderProductItem: React.FC<OrderProductItemProps> = ({orderProduct, 
    setIsAddReviewOpen, 
    setproductId,
    deleteProduct,
    productId,
    colorId
})=>{

    let { cartItems, handleDeleteFromCart, address, setAddress, handlePlaceOrder, handleGetOrders, stateDropdownItems, updateTaxPercent, generatePDF } = useCartPage();
    const showReviewButton = typeof(setIsAddReviewOpen) === 'function' && typeof(setproductId) === 'function'
    const navigate = useNavigate()

    return(
        <div
        className="bg-white rounded-lg w-full px-2 py-1 my-3">
            <div
            className="tablet:flex tablet:justify-between">
                <div
                className="w-fit flex max-w-[80%] overflow-hidden">
                    <img src={orderProduct.images[0]} alt="/image/wrapper/stockpolish.png" 
                    className="w-24 h-24"/>
                    <div
                    className="text-xs line-clamp-1 tablet:text-sm flex flex-col h-full">
                        <p>{orderProduct.name}</p>
                        <p
                        className="text-xxs my-1">
                            <span
                            className="px-2 py-2 bg-lightgray rounded-full mr-[0.5rem]">x{orderProduct.quantity} items</span>
                            {orderProduct.category === "Nail Polish" && 
                                <span
                                className="px-1 py-2 bg-lightgray rounded-full mr-[0.5rem]">50ml</span>
                            }
                        </p>
                        <p>
                            ${orderProduct.price}
                        </p>
                    </div>
                </div>
                <div
                className={`w-full my-2 h-full grid ${showReviewButton?'grid-cols-3':'grid-cols-2'} gap-3 tablet:grid-cols-1 tablet:max-w-[20%]`}>
                    {
                        showReviewButton &&
                        <CommonButton
                        label="Add review"
                        primaryColor="primary"
                        secondaryColor="white"
                        callBack={() => {
                            setproductId(orderProduct.product_id)
                            setIsAddReviewOpen(true)
                        }}
                        />
                    }
                        <CommonButton 
                        primaryColor="white"
                        secondaryColor="darkgray"
                        label="Delete"
                        customStyles={deleteProduct?"":"hidden"}
                        callBack={() => { handleDeleteFromCart(orderProduct.product_id, orderProduct.color_id) }}
                        />
                            <CommonButton
                            label="Buy again"
                            primaryColor="primary"
                            secondaryColor="white"
                            customStyles={deleteProduct?"hidden":""}
                            callBack={()=>navigate("/productDetail/" + orderProduct.product_id)}
                            />
                            <CommonButton 
                            label="View product"
                            primaryColor="lightgray"
                            secondaryColor="black"
                            customStyles={deleteProduct?"hidden":""}
                            callBack={()=>navigate("/productDetail/" + orderProduct.product_id)}
                            />
                    
                </div>
            </div>
        </div>
    )
}

export default OrderProductItem