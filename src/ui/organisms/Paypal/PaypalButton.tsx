import React, { useEffect, useRef, useCallback } from 'react';
import { capturePayment, createPayment } from '../../../services/login';
import { useCartPage } from '../../../utils/hooks/useCartPage';

interface PayPalButtonProps{
    amount  : number
    handleInvoice : ()=> void
}

const PayPalButton:React.FC<PayPalButtonProps>  = ({amount, handleInvoice}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const buttonRendered = useRef(false);
  const {handlePlaceOrder} = useCartPage()

  const handleCreateOrder = useCallback(async () => {
    try {
        const response = await createPayment(amount)
        return response?.data.id
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }, []);

  const handleApprove = useCallback(async (data: any) => {
    try {
        const response = await capturePayment(data.orderID);
        handlePlaceOrder(data.orderID)
        handleInvoice()
        console.log('Capture result:', response?.data);
    } catch (error) {
      console.error('Error approving payment:', error);
      throw error;
    }
  }, []);


  useEffect(() => {
    if (paypalRef.current && !buttonRendered.current && (window as any).paypal) {
      buttonRendered.current = true;
      (window as any).paypal.Buttons({
        createOrder: handleCreateOrder,
        onApprove: handleApprove,
      }).render(paypalRef.current);
    }
  }, [handleCreateOrder, handleApprove]);

  return (
    <div className="flex justify-center items-center">  
  <div 
    className="w-[80%] flex justify-center"
    ref={paypalRef}>
  </div>
</div>

  );
};

export default PayPalButton;
