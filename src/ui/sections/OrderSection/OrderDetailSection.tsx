import React, { useState } from "react";

import ReviewsStats from "../../organisms/ReviewsStats/ReviewsStats";
import ReviewsPreview from "../../organisms/ReviewsPreview/ReviewsPreview";
import { FaChevronRight } from "react-icons/fa6";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import PopupDialog from "./ManageOrder";
import { useCartPage } from "../../../utils/hooks/useCartPage";
import { Order } from "../../../interfaces/Order";
import OrderProductItem from "../../molecules/OrderProductItem/OrderProductItem";
import ListOpener from "../../atoms/items/ListOpener/ListOpener";

interface OrderDetailSectionProps {
    order: Order,
    setIsManageOrderOpen: (isOpen: boolean) => void,
    setIsAddReviewOpen: (isOpen: boolean) => void,
    id: number,
    setId: (id: number) => void
    setproductId: (productId: number) => void
}

const OrderDetailSection: React.FC<OrderDetailSectionProps> = ({ order, setIsManageOrderOpen, id, setId, setIsAddReviewOpen, setproductId }) => {

    let { isMobile } = useMediaWidth()
    let [expand, setExpand] = useState<boolean>(false);
    let { cartItems } = useCartPage()
    const formattedDate = new Date(order.creation_date.toString())
    formattedDate.setDate(formattedDate.getDate() + 7)

    const deliveryDate = formattedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    console.log("formatted date", formattedDate)



    return (
        <div className='w-[90%] border bg-white border-secondarydark rounded m-auto'>

            <div className="mx-4 my-3 flex items-center">
                <div className="grid grid-cols-1 place-items-baseline gap-2 m-auto tablet:grid-cols-4 tablet:gap-x-[10%] tablet:place-items-start desktop:w-[90%]">
                    <p className="text-md">Order #{order.order_id}</p>
                    {/* <p className="text-sm desktop:text-md">Order #{123456789}</p> */}
                    {
                        order.status === "delivered" &&
                        <p className="font-medium text-xs text-darkgray desktop:text-md whitespace-nowrap">Delivered on {deliveryDate}</p>
                    }
                    {order.status !== "delivered" &&
                        <p className="font-medium text-xs text-green desktop:text-md whitespace-nowrap">Delivery on {deliveryDate}</p>
                    }
                    {/* <button className="text-xs desktop:text-md bg-primary text-secondary rounded-md" onClick={() => { setId(id); setIsManageOrderOpen(true) }}>Manage Order</button> */}
                    <span
                    className="text-xs desktop:text-md underline hover:cursor-pointer"
                    onClick={() => { setId(id); setIsManageOrderOpen(true) }}>Manage Order</span>
                    {/* <a className="text-xs desktop:text-md">View invoice</a> */}
                </div>
                <div className="">
                    {
                        !expand && <button onClick={() => setExpand(true)}><FaChevronRight className="text-xs" /></button>
                    }
                    {
                        expand && <button onClick={() => setExpand(false)}><FaChevronRight style={{ transform: 'rotate(90deg)' }} className="text-xs mt-1" /></button>
                    }
                </div>
            </div>

            {expand &&
                <div className="items-center overflow-y-scroll w-full max-h-[30vh]">
                    {/* <table className="table-auto text-md border-separate border-spacing-4 w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Product</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {order.products.map((item) => (
                            <tr>
                                <td>
                                    <img src={item.images[0]} alt={item.name} className="h-16 w-16 object-cover mx-auto" />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td className="inline-flex justify-center items-center space-x-2 mt-4">
                                    <span>{item.quantity}</span>
                                </td>
                                <td>${(item.quantity * item.price).toFixed(2)}</td> 
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                    {
                        order.products.map(item => <OrderProductItem orderProduct={item}
                            setIsAddReviewOpen={setIsAddReviewOpen}
                            setproductId={setproductId} />)
                    }
                </div>
            }
        </div>
    )
}

export default OrderDetailSection