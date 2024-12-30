import React from "react";

import Star from "../../atoms/items/ratings/Star/Star";
import PercentageBar from "../../atoms/items/PercentageBar/PercentageBar";

interface BreakupItemProps{
    rateVal: number,
    reviewsPercentage: number
}

const BreakupItem: React.FC<BreakupItemProps> = ({
    rateVal,
    reviewsPercentage
})=>{
    return(
        <div
        className="grid grid-rows-1 place-items-center grid-cols-[25%_50%_25%] gap-2">
            <div
            className="w-full flex justify-evenly">
                <span
                className="text-xs">
                    {rateVal}
                </span>
                <Star 
                fillType="full"/>
            </div>
            <PercentageBar 
            percentage={reviewsPercentage}/>
            <span
            className="text-xs">
                {reviewsPercentage} %
            </span>
        </div>
    )
}

export default BreakupItem