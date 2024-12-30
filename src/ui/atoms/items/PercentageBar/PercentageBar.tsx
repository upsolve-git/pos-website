import React from "react";

interface PercentageBarProps{
    percentage: number
}

const PercentageBar: React.FC<PercentageBarProps> = ({
    percentage
})=>{

    // const wVal = "w-["+percentage.toString()+"%]"

    return(
        <div
        className="w-full h-2 bg-midgray rounded-full overflow-hidden">
            <div
            style={{ width: `${percentage}%` }}
            className={`h-full bg-gold`}>
                
            </div>
        </div>
    )
}

export default PercentageBar