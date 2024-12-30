import React from "react";

import RatingStars from "../RatingStars/RatingStars";

interface RatingCheckboxProps{
    rateValue: number
}

const RatingCheckbox: React.FC<RatingCheckboxProps> = ({
    rateValue
})=>{
    return(
        <div
        className="flex items-center">
            <input type="checkbox"/>
            <RatingStars
            rating={rateValue}/>
        </div>
    )
}

export default RatingCheckbox