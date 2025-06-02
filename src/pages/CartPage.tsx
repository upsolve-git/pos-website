import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartcard from "../ui/organisms/CartCard/CartCard";
import { Cart } from "../interfaces/Cart";
import { base_url } from "../constants/routes";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";

const AppointmentHistoryPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const authResponse = await axios.get(base_url+"api/auth/isAdmin", { withCredentials: true });
        const customer_id = authResponse.data.userId;  
        const response = await axios.get(base_url+`api/customer/get-cart/${customer_id}`);
        setCartItems(response.data); // Assuming the API returns a list of appointments
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error fetching cart");
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveFromCart = async (cart_id: number) => {
  
    try {
      await axios.post(base_url+"api/customer/delete-from-cart",
        {
          cart_id,
        });
      setCartItems((prevItems) => prevItems.filter((item) => item.cart_id !== cart_id));
    } catch (err: any) {
      setError(err.message || "Error removing from cart");
    }
  };

  const appointmentHandler = async () => {
    try {
      setLoading(true);
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
      const response = await axios.post(
        base_url+ "api/customer/book-appointment",
        {
          customer_id,
        }
      );

      if (response.status === 201) {
        alert("Appointments booked successfully!");
        navigate("/");
      } else {
        alert("Failed to book appointments. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointments:", error);
      alert("Failed to book appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cartItems.length === 0) {
    return <div>No items added.</div>;
  }

  return (
    <div
        className="w-[90%] mx-auto mt-10">  
    <div className="grid grid-cols-1 gap-6 desktop:grid-cols-3">
      {cartItems.map((item) => (
        <Cartcard key={item.cart_id} cart={item} deleteHandler={handleRemoveFromCart}/>
      ))}
    </div>

    <div className="w-full tablet:w-auto">
      <ActionButton
        label={"Book Appointment"}
        callbackFunc={appointmentHandler}
      />
    </div>
    </div>
  );
};

export default AppointmentHistoryPage;
