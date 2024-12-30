import { useNavigate, useParams } from 'react-router-dom';

import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import OrderDetailLine from '../ui/molecules/OrderDetailLine/OrderDetialLine';

import { MdOutlineDateRange } from 'react-icons/md';
// import { FaCircleUser } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { TbInvoice } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import OrderProductItem from '../ui/molecules/OrderProductItem/OrderProductItem';
import { useEffect, useState } from 'react';
import { Order } from '../interfaces/Order';
import { getOrderReq } from '../services/login';

interface OrderSuccessPageProps {}

const OrderSuccessPage: React.FC<OrderSuccessPageProps> = () => {
    const { id } = useParams<{ id: string }>(); // This will capture the id from the URL
    console.log("in order success page")
    let { isMobile } = useMediaWidth();
    const navigate = useNavigate();
    
    // Set default state for orders
    let [orders, setOrders] = useState<Order[]>([]);
    let [display, setDisplay] = useState<boolean>(false);

    // Fetch order data based on the `id` param
    useEffect(() => {
        const getOrder = async () => {
            console.log("calling get orders", id);
            try {
                const res = await getOrderReq(Number(id));
                setOrders(res?.data); // assuming res?.data is an array of orders
                setDisplay(true);
            } catch (err) {
                console.log("failed fetching order", err);
            }
        };
        getOrder();
    }, [id]); // Include `id` in the dependency array

    // Conditional rendering based on orders data
    if (!display) {
        return <div>Loading...</div>; // Show loading or fallback UI
    }

    if (orders.length === 0) {
        return <div>No orders found</div>; // Show when there are no orders
    }

    console.log(orders)

    return (
        <div className="bg-secondary space-y-16">
        {/* <Navbar /> */}
        <p className="text-center text-primary font-bold tablet:text-lg">Thank you for your purchase!</p>
        <div className="w-[90%] px-3 border bg-white border-secondarydark rounded m-auto tablet:w-[70%]">
            <div className="items-center">
                <div
                className="w-full h-fit">
                    <div
                        className='my-2'>
                        <OrderDetailLine
                            icon={<MdOutlineDateRange />}
                            label={'Date'}
                            value={orders[0].creation_date.toString()} />
                        <OrderDetailLine
                            icon={<FaCircleUser />}
                            label={'Customer'}
                            value={orders[0].user_id.toString()} />
                    </div>
                    <div
                        className='my-2'>
                        <OrderDetailLine
                            icon={<TbInvoice />}
                            label={'Order Number'}
                            value={orders[0].order_id.toString()} />
                        <OrderDetailLine
                            icon={<BiDollar />}
                            label={'Total'}
                            value={'$'+ orders[0].total} />
                    </div>
                </div>
                <div>
                    <h2
                    className='font-bold tablet:text-lg'>Order Line</h2>
                    <div
                    className='h-[20vh] overflow-auto'>
                        {
                            orders[0].products.map(prod=>
                            <OrderProductItem 
                            orderProduct={prod}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
        {/* <FooterSection /> */}
    </div>
    );
};

export default OrderSuccessPage;
