import React from "react";

import { starGiver } from "../../../../../helpers/starGiver";

interface RatingStarsProps {
    rating: number
}

const RatingStars: React.FC<RatingStarsProps> = ({
    rating
})=>{

    let starNodes: React.ReactNode[] = starGiver(rating)

    return(
        <div
        className="flex items-center w-fit h-fit">
            {
                starNodes.map(star=>star)
            }
        </div>
    )
}

export default RatingStars