import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import OrderProgressBar from '../../molecules/OrderProgressBar/OrderProgressBar';

import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import OrderProductItem from '../../molecules/OrderProductItem/OrderProductItem';
import { Order } from '../../../interfaces/Order';

interface ManageOrderProps {
  isOpen: boolean;
  onClose: () => void;
  order : Order
}

const ManageOrder: React.FC<ManageOrderProps> = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  const invoiceHandler = ()=>{
    console.log('invoice gen');
    
  }

  const formattedDate = new Date(order.creation_date.toString())
  const creationDate = formattedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const confirmDate = (new Date(order.confirmation_date.toString())).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const shippedDate = (new Date(order.shipping_date.toString())).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const deliveredDate = (new Date(order.delivered_date.toString())).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
    formattedDate.setDate(formattedDate.getDate() + 7)

      const deliveryDate = formattedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 bg-secondary">
      <div className="bg-secondary w-[90%] rounded-lg shadow-lg p-6 flex flex-col items-center desktop:w-[50%]">
        <h2 className="text-md font-semibold text-primary tablet:text-xl desktop:text-xl">Manage Order</h2>
        <div
        className='w-full flex items-start justify-between'>
          <div
          className='tablet:w-fit'>
            <h2
            className='text-md font-medium tablet:text-lg'>
              Order ID: {order.order_id}
            </h2>
            <div
            className='w-full text-xxs whitespace-nowrap tablet:flex'>
              <p className='tablet:mr-3'>Order date: {creationDate}</p>
              {
                order.status != "pending"?
                <p className='text-green flex items-center'>
                  <FaRegCheckCircle />
                  Delivered: {deliveryDate}
                </p>:
                <p className='text-green flex items-center'>
                  <TbTruckDelivery />
                  Estimated delivery: {deliveryDate}
                </p>
              }
              
            </div>
          </div>
          <div>
            {/* <CommonButton
            label='Invoice' 
            primaryColor='secondary'
            secondaryColor='primary'
            customStyles='border-2 px-1 border-primary'
            callBack={invoiceHandler}
            /> */}
          </div>
        </div>
        <OrderProgressBar
        orderConfirmDate={creationDate}
        shippedDate={shippedDate}
        confirmedDate={confirmDate}
        deliveredDate={deliveredDate}
        orderStatus={order.status}
        />
        <div
        className='w-full my-4 max-h-[20vh] overflow-auto'>
          {
            order.products.map(item=><OrderProductItem orderProduct={item}/>)
          }
        </div>
        <div
        className='w-12'>
          <CommonButton 
          label='Cancel'
          primaryColor='red'
          secondaryColor='white'
          callBack={onClose}
          />
        </div>
        <div
        className='w-12'>
          <CommonButton 
          label='Close'
          primaryColor='primary'
          secondaryColor='white'
          callBack={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;