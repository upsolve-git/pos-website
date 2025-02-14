import React from 'react';

interface WalletCardProps {
    balance: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance }) => {
    return (
        <div className="bg-white mx-auto border border-secondarydark border-[0.1rem] rounded-2xl py-8 px-6 text-center shadow-md 
                        tablet:max-w-[70%] desktop:max-w-[60%] transition-transform transform hover:scale-105">
            <p className="font-semibold text-gray-700 text-md tablet:text-lg desktop:text-2xl">
                Remaining Balance
            </p>
            <p className="font-bold text-gray-900 text-4xl tablet:text-5xl desktop:text-6xl my-2">
                ₹{balance.toLocaleString()}
            </p>
        </div>
    );
};

export default WalletCard;
