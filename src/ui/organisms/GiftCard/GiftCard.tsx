import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../../../constants/routes';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';
import { useNavigate } from "react-router-dom";

interface GiftCardProps {
    giftAmount: number;
}

const GiftCard: React.FC<GiftCardProps> = ({ giftAmount }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
  const navigate = useNavigate();

    const handleBuy = async () => {
        setLoading(true);
        setError('');
        try {
            let customer_id;

      try {
        const authResponse = await axios.get(
          base_url+"api/auth/isAdmin",
          { withCredentials: true }
        );
        console.log(authResponse)
        customer_id = authResponse.data.userId;
      } catch (err: any) {
        alert("You need to log in to book an appointment.");
        navigate("/auth/sign-in");
        return;
      }
      console.log(customer_id)
            // Updated to call update-wallet API
            const response = await axios.post(`${base_url}api/customer/update-wallet`, { user_id:customer_id, credits: giftAmount });
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                window.location.reload(); // Refresh to update wallet balance
            }, 2000);
        } catch (err: any) {
            setError(err.message || 'Failed to update wallet.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-white border-gray-300 border rounded-lg py-6 text-center shadow-md px-4'>
            <p className='font-medium text-sm text-gray-600'>
                Buy Gift Card
            </p>
            <p className='font-bold text-2xl text-gray-800 mb-4'>
                ₹{giftAmount}
            </p>
            <ActionButton label='Buy Now' callbackFunc={handleBuy} />
            {success && (
                <p className='text-green-600 mt-2'>
                    Wallet updated successfully!
                </p>
            )}
            {error && (
                <p className='text-red-600 mt-2'>
                    {error}
                </p>
            )}
        </div>
    );
};

export default GiftCard;
