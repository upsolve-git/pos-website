import React from "react";
import BreakupItem from "./BreakupItem";

interface RatingBreakupProps{}

const RatingBreakup: React.FC<RatingBreakupProps> = ()=>{
    return(
        <div
        className="grid grid-cols-1 gap-3 my-2">
            <BreakupItem 
            rateVal={5}
            reviewsPercentage={60}/>
            <BreakupItem 
            rateVal={4}
            reviewsPercentage={10}/>
            <BreakupItem 
            rateVal={3}
            reviewsPercentage={5}/>
            <BreakupItem 
            rateVal={2}
            reviewsPercentage={15}/>
            <BreakupItem 
            rateVal={1}
            reviewsPercentage={0}/>
        </div>
    )
}

export default RatingBreakup