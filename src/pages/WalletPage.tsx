import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WalletCard from '../ui/organisms/WalletCard/WalletCard';
import GiftCard from '../ui/organisms/GiftCard/GiftCard';
import { useNavigate } from "react-router-dom";
import { base_url } from '../constants/routes';

interface WalletPageProps {}

const WalletPage: React.FC<WalletPageProps> = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        let customer_id;

      try {
        const authResponse = await axios.get(
          base_url+"api/auth/isAdmin",
          { withCredentials: true }
        );
        customer_id = authResponse.data.userId;
      } catch (err: any) {
        alert("You need to log in to book an appointment.");
        navigate("/auth/sign-in");
        return;
      }
        const response = await axios.get(`${base_url}api/customer/get-wallet/${customer_id}`);
        setBalance(response.data.credits); // Assuming the response contains a "balance" field
        setLoading(false);
      } catch (err: any) {
        setError('Error fetching wallet balance');
        setLoading(false);
      }
    };

    fetchWallet();
  }, []);

  if (loading) {
    return <div>Loading wallet...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-8 px-[5%]">
      <div>
        <p className="font-bold text-primary text-lg font-lexend mb-6 desktop:text-2xl">
          Wallet
        </p>
        <WalletCard balance={balance ?? 0} />
      </div>
      <div className="my-10 mx-auto grid grid-cols-2 gap-2 tablet:max-w-[70%] desktop:max-w-[60%] tablet:gap-6 desktop:gap-12">
        <GiftCard giftAmount={500} />
        <GiftCard giftAmount={1000} />
      </div>
    </div>
  );
};

export default WalletPage;
