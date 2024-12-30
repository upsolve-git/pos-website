import React from "react";
import PriceRangeSlider from "../../molecules/filterElements/PriceRangeSlider/PriceRangeSlider";
import RatingFilter from "../../molecules/filterElements/RatingFilter/RatingFilter";

interface BigFiltersBoardProps{
    clearAll: ()=>void,
}

const BigFiltersBoard: React.FC<BigFiltersBoardProps> = ({
    clearAll
})=>{
    return(
        <div
        className="text-xs py-4 px-3 w-full h-full rounded-lg border border-primary bg-white desktop:text-md">
            <div
            className="flex justify-between mb-[10%]">
                <span
                className="font-medium">
                    Filters
                </span>
                <span
                onClick={clearAll}
                className="text-primary min-w-fit">
                    Clear all
                </span>
            </div>
            <PriceRangeSlider />
            {/* <RatingFilter /> */}
        </div>
    )
}

export default BigFiltersBoard