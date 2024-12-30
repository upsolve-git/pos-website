import {useState} from "react";
import { addReviewReq } from "../../services/login";

export const useAddReview = ()=>{
    let [rating, setRating] = useState<number>(2.5)
    let [ratingText, setRatingText] = useState<string>("")


    const handleRating = (rate:number) => {
        setRating(rate)
    }

    const handleRatingText = (rateText:string) => {
        setRatingText(rateText)
    }

    const dummyClick = async (product_id : number, ) => {
        await addReviewReq(rating, ratingText, product_id)
        .then( res => {
            window.alert("successully added review")
        })
        .catch(err => {
            window.alert("error in adding review")
        })
    }

    return {rating, handleRating, ratingText, handleRatingText, dummyClick}
}