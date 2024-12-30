import React, { useEffect, useState } from "react";
import { Order } from "../../../interfaces/Order";
import { getAdminOrders } from "../../../services/login";
import NavButton from "../../atoms/navItems/NavButton/NavButton";
import OrderDetail from "./OrderDetail";
import AddressDialog from "./AddressDialog";


interface OrdersProps{
}

const Orders: React.FC<OrdersProps> = ()=>{
    let [orders, setOrders] = useState<Order[]>([])
    let [filteredOrders, setFilteredOrders] = useState<JSX.Element[]>([]);
    let [newOders, setNewOrders] = useState<boolean>(false)
    let [confirmOders, setConfirmOrders] = useState<boolean>(false)
    let [shippedOrders, setShippedOrders] = useState<boolean>(false)
    let [deliveredOrders, setDeliveredOrders] = useState<boolean>(false)
    const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
    let [id, setId] = useState(1)

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const ordersRes = await getAdminOrders(); 
            console.log("orders",ordersRes)
            setOrders(ordersRes.data);
          } catch (err) {
            console.error("Error fetching orders:", err);
          }
        };
    
        fetchOrders(); 
      }, [])

    const filterOrders = async(filter : string) => {
        let items = []
        const filtered =  orders.filter((order) => order.status === filter)
        for(let i=0;i<filtered.length;i++){ 
            items.push(<OrderDetail order={filtered[i]} id={i} setId={setId} setIsAddressDialogOpen={setIsAddressDialogOpen}/>)
        }
        setFilteredOrders(items)
    }

    return(
       <div>
            <div className="grid grid-rows-1 grid-cols-4 w-fit h-[50%]"> 
                <NavButton label="New Orders"
                    onClick={()=>{setNewOrders(true); setConfirmOrders(false); setShippedOrders(false); setDeliveredOrders(false); filterOrders("pending")}}
                    isActive={newOders}/>
                    <NavButton label="Confirmed Orders" 
                    onClick={()=>{setNewOrders(false); setConfirmOrders(true); setShippedOrders(false); setDeliveredOrders(false); filterOrders("confirmed")}}
                    isActive={confirmOders}/>
                    <NavButton label="Shipped Orders" 
                    onClick={()=>{setNewOrders(false); setConfirmOrders(false); setShippedOrders(true); setDeliveredOrders(false); filterOrders("shipped")}}
                    isActive={shippedOrders}/>
                    <NavButton label="Delivred Orders" 
                    onClick={()=>{setNewOrders(false); setConfirmOrders(false); setShippedOrders(false); setDeliveredOrders(true); filterOrders("delivered")}}
                    isActive={deliveredOrders}/>
            </div> 
            {
                filteredOrders.map(e=>e)
            }
            <AddressDialog isOpen={isAddressDialogOpen} onClose={() => setIsAddressDialogOpen(false)} address={orders[id]?.address}/>

       </div> 
    
    )
}

export default Orders