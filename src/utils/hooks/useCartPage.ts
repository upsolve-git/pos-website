import { useState, useEffect } from "react";
import { Product } from "../../interfaces/Product";
import { deleteFromUsersCartReq, getOrdersReq, getUserDefaultAddressReq, getUsersCartReq, placeOrderReq, updateUsersCartReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { Address } from "../../interfaces/Address";
import { Order } from "../../interfaces/Order";
import { jsPDF } from 'jspdf';
import { getAuth } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const useCartPage = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const navigate = useNavigate()

  const defaultAddress: Address = {
    address_id: 0,
    full_name: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    mobile: '',
    user_id: 0,
    default: false,
  };

  const [address, setAddress] = useState<Address>(defaultAddress);
  const [orders, setOrders] = useState<Order[]>([])
  const stateDropdownItems = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Quebec", "Price Edward Island", "Saskatchewan", "Yukon"]
  const updateTaxPercent = (state : string) : number => {
    let value: number;
    switch (state) {
      case "Alberta":
        value = 5;
        break;
      case "British Columbia":
        value = 12;
        break;
      case "Manitoba":
        value = 12;
        break;
      case "New Brunswick":
        value = 15;
        break;
      case "Newfoundland and Labrador":
        value = 15;
        break;
      case "Northwest Territories":
        value = 5;
        break;
      case "Nova Scotia":
        value = 15;
        break;
      case "Nunavut":
        value = 5;
        break;
      case "Ontario":
        value = 13;
        break;
      case "Quebec":
        value = 14.975;
        break;
      case "Price Edward Island":
        value = 15;
        break;
      case "Saskatchewan":
        value = 11;
        break;
      case "Yukon":
        value = 5;
        break;
      default:
        value = 0; // Default value if province not found
    }
    return value;
  }
  // Single useEffect with async/await for both calls
  useEffect(() => {
    const fetchCartAndAddress = async () => {
      try {
        // Fetch cart items
        const cartRes = await getUsersCartReq(1);
        setCartItems(cartRes.data);

        // Fetch user default address
        const addressRes = await getUserDefaultAddressReq();
        setAddress(addressRes.data ? addressRes.data : defaultAddress);

        const ordersRes = await getOrdersReq();
        console.log("orders", ordersRes)
        setOrders(ordersRes.data);
      } catch (err) {
        console.error("Error fetching cart or address:", err);
      }
    };

    fetchCartAndAddress(); // Call the async function
  }, []); // Empty dependency array to ensure this only runs on mount

  const handleAddToCart = async (product: Product, quantity: number, color_id: number) => {
    try{
      const authRes = await getAuth()
      if(authRes.status==200){
        console.log('yes authed');
        try {
            const res = await updateUsersCartReq(product.product_id, quantity, color_id);
            console.log("added to cart", res);
            window.alert('Cart items added')
        } catch (err) {
          console.error("Error adding product to cart:", err);
        }
      }
    }catch(err){
      console.log('were here');
      navigate('/auth/sign-in')
    }
  };

  const handleDeleteFromCart = async (product_id: number, color_id: number) => {
    try {
      const res = await deleteFromUsersCartReq(product_id, color_id);
      console.log("deleted from cart", res);
      window.location.reload()
    } catch (err) {
      console.error("Error deleting product from cart:", err);
    }
  };

  const handlePlaceOrder = async (orderId: string) => {
    console.log("address changed", address);
    try {
      const res = await placeOrderReq(orderId, address, cartItems)
      navigate("/ordersuccess/"+res?.data.order_id)
      console.log("added to cart", res);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  const handleGetOrders = async () => {
    console.log(orders)
  }

  const generatePDF = (subtotal: number, discount:number, tax : number, deliveryFee : number,) => {
    const doc = new jsPDF();

    // Set font size and add invoice header
    doc.setFontSize(18);
    doc.text('Invoice', 105, 20, { align: 'center' });

    // Add company details
    doc.setFontSize(12);
    doc.text('Canadian Gel Nails', 20, 30);
    doc.text('PO Box 2900 SUDBURY PO A, ON, P3A 5J3, Canada', 20, 35);
    doc.text('Email: dev.cgnails@gmail.com', 20, 45);

    // Add a horizontal line separator
    doc.line(20, 55, 190, 55);

    doc.setFontSize(14);
    doc.text('Item', 20, 65);
    doc.text('Price', 170, 65, { align: 'right' });

    // Dynamic Y-coordinate to avoid overlapping
    let currentY = 75;

    // Loop through cart items and add them to the PDF
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        doc.text(`${item.name} x ${item.quantity}`, 20, currentY);
        doc.text((item.quantity * item.price).toFixed(2), 170, currentY, { align: 'right' });

        // Increment Y-coordinate for the next line
        currentY += 10; // Increase Y by 10 for each line to space out items
    }

    // Add another horizontal line separator after items
    doc.line(20, currentY + 5, 190, currentY + 5);
    currentY += 15; // Add space after the separator for totals

    // Add subtotal, discount, tax, delivery fee, and total
    doc.text('Subtotal', 20, currentY);
    doc.text(`$${subtotal.toFixed(2)}`, 170, currentY, { align: 'right' });

    doc.text('Discount', 20, currentY + 10);
    doc.text(`-$${discount.toFixed(2)}`, 170, currentY + 10, { align: 'right' });

    doc.text('Tax', 20, currentY + 20);
    doc.text(`$${tax.toFixed(2)}`, 170, currentY + 20, { align: 'right' });

    doc.text('Delivery Fee', 20, currentY + 30);
    doc.text(`$${deliveryFee.toFixed(2)}`, 170, currentY + 30, { align: 'right' });

    // Add another horizontal line separator before the total
    doc.line(20, currentY + 40, 190, currentY + 40);

    doc.text('Total', 20, currentY + 50);
    const total = subtotal - discount + tax + deliveryFee;
    doc.text(`$${total.toFixed(2)}`, 170, currentY + 50, { align: 'right' });

    // Save the PDF
    doc.save('invoice.pdf');
};


  
  return {
    handleAddToCart,
    handleDeleteFromCart,
    cartItems,
    address,
    setAddress,
    handlePlaceOrder,
    handleGetOrders,
    orders,
    stateDropdownItems,
    updateTaxPercent,
    generatePDF
  };
};
