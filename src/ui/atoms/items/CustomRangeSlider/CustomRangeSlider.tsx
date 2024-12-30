import React from "react";

interface CustomRangeSliderProps{}

const CustomRangeSlider: React.FC<CustomRangeSliderProps> = ()=>{
    return(
        <div
        className="w-full relative">
            <input type="range" min={0} max={1000}
            className="absolute z-10 max-w-full"/>
            <input type="range" min={0} max={1000}
            className="absolute z-20 max-w-full"/>
        </div>
    )
}

export default CustomRangeSlider