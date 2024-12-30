import React, { useState } from "react";

import ReviewsStats from "../../organisms/ReviewsStats/ReviewsStats";
import ReviewsPreview from "../../organisms/ReviewsPreview/ReviewsPreview";
import { FaChevronRight } from "react-icons/fa6";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import { useCartPage } from "../../../utils/hooks/useCartPage";
import { Order } from "../../../interfaces/Order";
import OrderProductItem from "../../molecules/OrderProductItem/OrderProductItem";
import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";
import { postConfirmOrder, postDeliverOrder, postShipOrder } from "../../../services/login";
import PrintButton from "./Addressprint";
import AddressDialog from "./AddressDialog";

interface OrderDetailSectionProps{
    order : Order,
    setIsAddressDialogOpen : (isOpen : boolean) => void,
    id : number,
    setId :  (id:number) => void
}

const OrderDetail: React.FC<OrderDetailSectionProps> = ({order, setId, setIsAddressDialogOpen, id})=>{

    let {isMobile} = useMediaWidth()
    let [expand, setExpand] = useState<boolean>(false);

    const formattedDate = new Date(order.creation_date.toString())
    formattedDate.setDate(formattedDate.getDate() + 7)

    const confirmOrder = async(order_id : number) => {
        await postConfirmOrder(order_id) 
        .then(res => {
            console.log("confirmed Order")
            window.location.reload();
        }).catch(err => {
            console.log("error in confirming")
        })
    }

    const shipOrder = async(order_id : number) => {
        await postShipOrder(order_id) 
        .then(res => {
            console.log("changed status to shipped Order")
            window.location.reload();
        }).catch(err => {
            console.log("error in confirming")
        })
    }

    const deliverOrder = async(order_id : number) => {
        await postDeliverOrder(order_id) 
        .then(res => {
            console.log("changed status to delivered Order")
            window.location.reload();
        }).catch(err => {
            console.log("error in confirming")
        })
    }

    const deliveryDate = formattedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });
    return(
        <div className='w-[70%] border bg-white border-secondarydark rounded m-4 mx-auto'>
             
            <div className="mx-8 my-6 flex justify-between items-center">
                <div className="flex items-center">
                    <p className="mx-2 font-bold text-md">Order #{order.order_id}</p>
                    {order.status === "delivered" && 
                        <p className="text-xs my-1 text-gray-500">Delivered on {deliveryDate}</p>
                    } 
                    {order.status !== "delivered" && 
                        <p className="text-xs">Delivery on {deliveryDate}</p>
                    }
                </div>
                <div className="flex items-center space-x-4">
                <CommonButton label="Address" primaryColor="primary" secondaryColor="white" callBack={() => {setId(id);setIsAddressDialogOpen(true)}} />
                    {
                        order.status === "pending" && <CommonButton label="Confirm" primaryColor="primary" secondaryColor="white" callBack={() => confirmOrder(order.order_id)} />
                    }
                    {
                        order.status === "confirmed" && <CommonButton label="Shipped" primaryColor="primary" secondaryColor="white" callBack={() => shipOrder(order.order_id)} />
                    }
                    {
                        order.status === "shipped" && <CommonButton label="Dlivered" primaryColor="primary" secondaryColor="white" callBack={() => deliverOrder(order.order_id)} />
                    }
                    {
                        !expand && <button onClick={()=> setExpand(true)}><FaChevronRight className="text-xs"/></button>
                    } 
                    {
                        expand && <button onClick={() => setExpand(false)}><FaChevronRight style={{ transform: 'rotate(90deg)' }} className="text-xs mt-1" /></button>
                    }
                    {/* <PrintButton address={order.address}/> */}
                </div>
            </div>
            
            { expand && 
                 <div
                    className='w-fit m-4 max-h-[20vh]'>
                    {
                        order.products.map(item=><OrderProductItem orderProduct={item} />)
                    }
                    </div>
            }  

        </div>
    )
}

export default OrderDetail