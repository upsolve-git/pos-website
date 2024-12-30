import { truncateSync } from "fs";
import React from "react";

interface OrderProgressBarProps{
    orderConfirmDate: String | null
    confirmedDate: String | null,
    shippedDate: String | null
    deliveredDate: String | null
    orderStatus : string
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({
    orderConfirmDate,
    shippedDate,
    confirmedDate,
    deliveredDate,
    orderStatus
})=>{

    let barWidth = 0
    let [pendingStatus, confirmStatus, shippedStatus, deliveredStatus] = [false, false, false, false]
    if(orderStatus === "cancelled"){
        barWidth = 0
        pendingStatus = true
    }
    if(orderStatus === "waitlist"){
        barWidth = 2
        pendingStatus = true
        confirmStatus = true
    }
    if(orderStatus === "confirmed"){
        barWidth = 50
        pendingStatus = true
        confirmStatus = true
        shippedStatus = true
    }
    if(orderStatus === "complete"){
        barWidth = 100
        pendingStatus = true
        confirmStatus = true
        shippedStatus = true
        deliveredStatus = true
    }

    return (
        <div
        className="text-3xs tablet:text-xs desktop:text-md h-fit my-6">
            <div
            className="translate-y-[1050%] tablet:translate-y-[1550%] tablet:translate-x-[1%] desktop:translate-y-[2050%] w-[75%] m-auto bg-midgray h-[0.1rem]">
                <div
                style={{ width: `${barWidth}%` }} 
                className={`bg-green h-full`}></div>
            </div>
            <div
            className="flex justify-between">
                {/* <div
                className="flex flex-col items-center w-fit">
                    <p>Order placed</p>
                    <div className={`rounded-full w-fit ${orderConfirmDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{orderConfirmDate}</p>
                </div> */}
                <div
                className="flex flex-col mr-5 desktop:mr-10 items-center w-fit">
                    <p>Waitlist</p>
                    <div className={`rounded-full w-fit ${confirmStatus?'bg-green':'bg-midgray'} p-1`}></div>
                    {/* <p>{confirmedDate}</p> */}
                </div>
                <div
                className="flex flex-col mr-5 desktop:mr-10 items-center w-fit">
                    <p>Confirmed</p>
                    <div className={`rounded-full w-fit ${shippedStatus?'bg-green':'bg-midgray'} p-1`}></div>
                    {/* <p>{shippedDate}</p> */}
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Complete</p>
                    <div className={`rounded-full w-fit ${deliveredStatus?'bg-green':'bg-midgray'} p-1`}></div>
                    {/* <p>{deliveredDate}</p> */}
                </div>
            </div>
        </div>
    )
}

export default OrderProgressBar