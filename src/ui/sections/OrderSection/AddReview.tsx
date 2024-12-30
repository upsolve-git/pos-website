import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';

import { Rating } from '@mui/material';
import { useAddReview } from '../../../utils/hooks/useAddReview';

interface AddReviewProps {
  isOpen: boolean;
  onClose: () => void;
  product_id : number
}

const AddReview: React.FC<AddReviewProps> = ({ isOpen, onClose, product_id}) => {
  let {rating, handleRating, ratingText, handleRatingText, dummyClick} = useAddReview()

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 bg-secondary">
      <div className="bg-secondary w-[90%] rounded-lg shadow-lg p-6 flex flex-col items-center desktop:w-[50%]">
        <h2 className="text-lg font-semibold text-primary tablet:text-xl desktop:text-xl">Review</h2>
        <div
        className='border bg-secondary border-primary w-full p-3 rounded-md my-4'>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} 
          value={rating}
          onChange={(event, newValue) => {
            handleRating(newValue?newValue:0);
          }}/>
          <textarea
          className='border-2 bg-white border-primary w-full p-3 rounded-md my-4'
          value={ratingText}
          onChange={(e)=>handleRatingText(e.target.value)}></textarea>
        </div>
        
          <div
          className='w-[80%] display grid grid-cols-2 place-items-center gap-3'>
            <CommonButton 
            label='Add Review'
            primaryColor='primary'
            secondaryColor='white'
            callBack={() =>{dummyClick(product_id); onClose()}}
            />
            <CommonButton 
            label='Close'
            primaryColor='white'
            secondaryColor='primary'
            callBack={onClose}
            />
          </div>
      </div>
    </div>
  );
};

export default AddReview;
