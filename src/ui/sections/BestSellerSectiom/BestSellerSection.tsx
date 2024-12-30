import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import ProdListSwitcher from "../../molecules/ProdListSwitcher/ProdListSwitcher";
import ProductPreviewList from "../../organisms/ProductPreviewList/ProductPreviewList";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

import { PRODUCTS_PAGE } from "../../../constants/routes";
import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import { Product } from "../../../interfaces/Product";
import { getLandingPage } from "../../../services/login";

interface BestSellerSectionProps {}

const BestSellerSection: React.FC<BestSellerSectionProps> = ()=>{
    let [bestSellers, setBestSellers] = useState<Product[]>([])
    let [newSellers, setNewSellers] = useState<Product[]>([])
    let [products, setProducts] = useState<Product[]>([])
    let [isBestSeller, setIsBestSeller] = useState<boolean>(true)
    const navigate = useNavigate()
    // console.log(products)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await getLandingPage();
                setBestSellers(res.data.bestSellers)
                setProducts(res.data.bestSellers)
                setNewSellers(res.data.newSellers)
            } catch (err) {
                console.log("failed fetching order", err);
            }
        };
        getProducts();
    }, []);

    const updateProducts = () => {
        if(isBestSeller) {
            setProducts(bestSellers);
        } else {
            setProducts(newSellers);
        }
    }
    return (
        <div
        className="h-fit w-screen px-4 py-8 bg-contain flex flex-col items-center">
            <h1
            className="pt-20 font-semibold text-center text-secondarydark text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
                OUR BEST SELLING PRODUCTS
            </h1>
            <ProdListSwitcher 
            isBestSeller={isBestSeller}
            setIsBestSeller={setIsBestSeller}
            updateProducts={updateProducts}/>
            
            {
                products.length && <ProductPreviewList 
                ishomepage={true}
                products={products}
                isBestSeller={isBestSeller}/>
            }
            
            <div
            className="w-[40%] mt-10 tablet:w-[20%]">
                <ActionButton
                label="View more!"
                callbackFunc={()=> navigate(PRODUCTS_PAGE)}/>
            </div>
        </div>
    )
}

export default BestSellerSection