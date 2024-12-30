import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { useNavigate } from 'react-router-dom';
import OrderDetailSection from "../ui/sections/OrderSection/OrderDetailSection";
import { useState } from "react";
import ManageOrder from "../ui/sections/OrderSection/ManageOrder";
import AddReview from "../ui/sections/OrderSection/AddReview";
import { useCartPage } from "../utils/hooks/useCartPage";

interface OrderHistoryPageProps { }

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = () => {
    let { isMobile } = useMediaWidth()
    let { cartItems, handleDeleteFromCart } = useCartPage();
    const navigate = useNavigate()
    const { orders } = useCartPage()

    const [isManageOrderOpen, setIsManageOrderOpen] = useState(false);
    const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

    let [id, setId] = useState(1)
    let [ProductId, setproductId] = useState(1)


    const openPopup = () => setIsManageOrderOpen(true);
    const closePopup = () => setIsManageOrderOpen(false);
    let items = []
    console.log("In order details page", orders)
    for (let i = 0; i < orders.length; i++) {
        items.push(<OrderDetailSection 
            order={orders[i]} 
            id={i} 
            setId={setId} 
            setIsManageOrderOpen={setIsManageOrderOpen} 
            setIsAddReviewOpen={setIsAddReviewOpen} 
            setproductId={setproductId} />)
    }
    return (
        <div
        className="my-3 tablet:my-6 desktop:my-10">
            <div className={`bg-secondary space-y-16 relative ${isManageOrderOpen || isAddReviewOpen ? 'blur-sm' : ''}`}>
                <p className="text-center text-primary font-bold desktop:text-xl">Purchase history</p>
                {
                    items.map(e => e)
                }
            </div>
            <ManageOrder isOpen={isManageOrderOpen} onClose={() => setIsManageOrderOpen(false)} order={orders[id]} />
            {/* <AddReview isOpen={isAddReviewOpen} product_id={ProductId} onClose={() => setIsAddReviewOpen(false)} /> */}
        </div>

    )
}

export default OrderHistoryPage