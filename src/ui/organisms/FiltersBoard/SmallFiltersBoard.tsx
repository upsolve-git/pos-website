import React from "react";

import PriceRangeSlider from "../../molecules/filterElements/PriceRangeSlider/PriceRangeSlider";
import RatingFilter from "../../molecules/filterElements/RatingFilter/RatingFilter";

import ListOpener from "../../atoms/items/ListOpener/ListOpener";

interface SmallFiltersBoardProps{
    clearAll: ()=>void,
    closeFilter: ()=>void
}

const SmallFiltersBoard: React.FC<SmallFiltersBoardProps> = ({
    clearAll,
    closeFilter
})=>{
    return (
        <div
        className="w-screen h-screen absolute top-0 left-0 bg-white z-40 px-4 py-5">
            <div
            className="flex items-center justify-between">
                <div
                onClick={closeFilter}
                className="w-fit">
                    <ListOpener
                    rotate="rotate-90"/>
                </div>
                <span
                className="font-medium translate-x-[50%]">
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

export default SmallFiltersBoard