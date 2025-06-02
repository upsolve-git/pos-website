import React from "react";
import { Cart } from "../../../interfaces/Cart";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

interface CartCardProps {
  cart: Cart;
  deleteHandler: (id : number) => void;
}

const CartCard: React.FC<CartCardProps> = ({ cart, deleteHandler }) => {

  const deleteCartHandler = () => {
    deleteHandler(cart.cart_id);
  };

  return (
    <div
    className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-montserrat transition-transform transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
    >
      <p className="text-primary font-bold text-xl mb-2">{cart.serviceName}</p>
      <p className="text-sm text-darkgray">
        <span className="font-semibold">Date:</span> {cart.date}
      </p>
      <p className="text-sm text-darkgray">
        <span className="font-semibold">Time:</span> {cart.startTime}
      </p>
      <div className="w-full tablet:w-auto">
        <ActionButton
          label={"Delete from cart"}
          callbackFunc={deleteCartHandler}
        />
      </div>
    </div>
  );
};

export default CartCard;
