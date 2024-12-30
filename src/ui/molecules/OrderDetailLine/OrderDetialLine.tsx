import React from "react";

import { IconContext } from 'react-icons';

interface OrderDetailLineProps {
    icon: React.ReactNode,
    label: string,
    value: string
}

const OrderDetailLine: React.FC<OrderDetailLineProps> = ({
    icon,
    label,
    value
}) => {
    
    return (
        <div
        className="flex justify-between text-xs tablet:text-sm">
            <div
            className='flex items-center'>
                <div
                className='mr-1'>
                    <IconContext.Provider
                    value={{color: '#C26F2D'}}>
                        {icon}
                    </IconContext.Provider>
                </div>
                <span className="text-darkgray">{label}</span>
            </div>
            <p className="font-semibold">{value}</p>
        </div>
    )
}

export default OrderDetailLine