import React from 'react';
import WalletCard from '../ui/organisms/WalletCard/WalletCard';
import GiftCard from '../ui/organisms/GiftCard/GiftCard';

interface WalletPageProps {}

const WalletPage: React.FC<WalletPageProps> = () => {
  return (
    <div
    className='py-8 px-[5%]'>
        <div>
            <p
            className="font-bold text-primary text-lg font-lexend mb-6 desktop:text-2xl">
                Wallet
            </p>
            <WalletCard 
            balance={1000}/>
        </div>
        <div
        className='my-10 mx-auto grid grid-cols-2 gap-2 tablet:max-w-[70%] desktop:max-w-[60%] tablet:gap-6 desktop:gap-12'>
            <GiftCard giftAmount={500}/>
            <GiftCard giftAmount={1000}/>
        </div>
    </div>
  );
};

export default WalletPage;
