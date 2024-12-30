import React from "react";
import ReviewContent from "../../molecules/ReviewContent/ReviewContent";

interface ReviewsPreviewProps{}

const ReviewsPreview: React.FC<ReviewsPreviewProps> = ()=>{
    const reviews = [
        {
            user:{
                fullname:"Alex Hailey",
            },
            reviewDate: new Date(2024,5,12),
            reviewRating: 4.5,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde itaque nobis molestiae pariatur harum delectus soluta ea expedita provident perspiciatis deleniti, nam quaerat. Expedita, culpa similique a quidem ipsam error?"
        },
        {
            user:{
                fullname:"Alex Hailey",
            },
            reviewDate: new Date(2024,5,12),
            reviewRating: 4.5,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde itaque nobis molestiae pariatur harum delectus soluta ea expedita provident perspiciatis deleniti, nam quaerat. Expedita, culpa similique a quidem ipsam error?"
        },
        {
            user:{
                fullname:"Alex Hailey",
            },
            reviewDate: new Date(2024,5,12),
            reviewRating: 4.5,
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde itaque nobis molestiae pariatur harum delectus soluta ea expedita provident perspiciatis deleniti, nam quaerat. Expedita, culpa similique a quidem ipsam error?"
        },
    ]

    return(
        <div
        className="grid grid-cols-1 w-full">
            
            {
                reviews.map((review)=>{
                    return(
                        <ReviewContent 
                        username={review.user.fullname}
                        reviewDate={review.reviewDate}
                        reviewRating={review.reviewRating}
                        reviewText={review.reviewText}
                        />
                    )
                })
            }
        </div>
    )
}

export default ReviewsPreview