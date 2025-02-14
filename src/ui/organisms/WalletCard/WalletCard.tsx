import React from 'react';

interface WalletCardProps {
    balance: number,
}

const WalletCard: React.FC<WalletCardProps> = ({
    balance
}) => {
  return (
    <div
    className='bg-white mx-auto border-secondarydark border-[0.1rem] rounded-lg py-6 text-center tablet:max-w-[70%] desktop:max-w-[60%]'>
        <p
        className='font-medium text-sm tablet:text-md desktop:text-xl'>
            Remaining Balance
        </p>
        <p
        className='font-medium text-2xl tablet:text-3xl desktop:text-5xl'>
            {balance}
        </p>
    </div>
  );
};

export default WalletCard;
