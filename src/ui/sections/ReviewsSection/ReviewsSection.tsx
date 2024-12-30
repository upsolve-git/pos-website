import React from "react";

import ReviewsStats from "../../organisms/ReviewsStats/ReviewsStats";
import ReviewsPreview from "../../organisms/ReviewsPreview/ReviewsPreview";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

interface ReviewsSectionProps{}

const ReviewsSection: React.FC<ReviewsSectionProps> = ()=>{

    let {isMobile} = useMediaWidth()

    return(
        <div
        className="tablet:flex w-screen h-fit">
        {
            isMobile?
            <></>:
            <div
            className="w-[25vw] place-self-stretch bg-secondarydark desktop:w-[10vw]">
                
            </div>
        }
            <div
            className="font-manrope tablet:place-self-center tablet:mx-3 tablet:my-3 desktop:mx-6 desktop:my-6">
                <h1
                className="font-semibold font-montserrat text-center text-primary text-lg tablet:text-xl tablet:text-left desktop:text-2xl monitor:text-5xl">
                    Reviews
                </h1>
                <div
                className="grid grid-cols-1 place-items-center tablet:grid-cols-2 tablet:place-items-start desktop:grid-cols-[40%_60%]">
                    <ReviewsStats 
                    averageRating={4.5}
                    totalReviews={368}/>
                    <div
                    className="overflow-hidden">
                        <ReviewsPreview />
                    </div>
                    {/* {
                        isMobile?
                        <></>:
                        <div
                        className="col-span-2 row-span-1 place-self-center">
                            <p>
                                1   2   3   4   5   6   7   8
                            </p>
                        </div>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default ReviewsSection