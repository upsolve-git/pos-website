import React from 'react';

interface GiftCardProps {
    giftAmount: number
}

const GiftCard: React.FC<GiftCardProps> = ({
    giftAmount
}) => {
  return (
    <div
    className='bg-white border-secondarydark border-[0.1rem] rounded-lg py-6 text-center'>
        <p
        className='font-medium text-sm'>
            Buy Gift Card
        </p>
        <p
        className='font-medium text-2xl'>
            {giftAmount}
        </p>
    </div>
  );
};

export default GiftCard;
