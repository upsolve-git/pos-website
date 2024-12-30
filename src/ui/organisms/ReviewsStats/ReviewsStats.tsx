import React from "react";

import RatingBreakup from "../../molecules/RatingBreakup/RatingBreakup";
import RatingStars from "../../atoms/items/ratings/RatingStars/RatingStars";

interface ReviewsStatsProps{
    averageRating: number,
    totalReviews: number
}

const ReviewsStats: React.FC<ReviewsStatsProps> = ({
    averageRating,
    totalReviews
})=>{

    // let starNodes: React.ReactNode[] = starGiver(averageRating)

    return(
        <div
        className="w-full">
            <div
            className="w-full max-w-[50ch] m-auto flex justify-between items-center px-[0.5rem]">
                <div
                className="flex items-center pl-[0.5rem] my-5">
                    <p
                    className="text-xl font-semibold mr-4 tablet:">
                        {averageRating}
                    </p>
                    <RatingStars 
                    rating={averageRating}/>
                </div>
                <p
                className="text-xs">
                    {totalReviews} Reviews
                </p>
            </div>
            <RatingBreakup />
        </div>
    )
}

export default ReviewsStats