import React, {useState} from "react";

import ListOpener from "../../../atoms/items/ListOpener/ListOpener";
import RatingCheckbox from "../../../atoms/items/ratings/RatingCheckbox/RatingCheckbox";

interface RatingFilterProps{}

const RatingFilter: React.FC<RatingFilterProps> = ()=>{

    let [isActive, setIsActive] = useState<boolean>(false)
    const ratings = [5,4.5,4,3.5,3,2.5,2,1.5,1,0.5]
    return(
        <div
        className="border-t-2 my-[6%] border-lightgray relative">
            <div
            className="flex justify-between items-center my-[10%]"
            onClick={()=>setIsActive(!isActive)}>
                <span
                className="font-bold">
                    Rating
                </span>
                {
                    isActive?
                    <ListOpener rotate=""/>:
                    <ListOpener rotate="-rotate-90"/>
                }
            </div>
            {
                isActive &&
                <div
                className="h-fit">
                    {
                        ratings.map(
                            (val, index)=>
                                <RatingCheckbox 
                                    rateValue={val} 
                                    key={index}
                                />
                        )
                    }
                </div>
            }
        </div>
    )
}

export default RatingFilter