import React from "react";

import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import AdSection from "../ui/sections/AdSection/AdSection";
import ProductsSection from "../ui/sections/ProductsSection/ProductsSection";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { FiltersContextProvider } from "../utils/hooks/useFiltersContext";

interface ProductsPageProps{}

const ProductsPage:React.FC<ProductsPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    

    // const products = [
    //     {
    //         product_id: 12300,
    //         name: 'Lime Exotic',
    //         product_type : 'nails',
    //         description: 'Lorem ipsum dolor sit adem, vattkai sollkai',
    //         price: 32,
    //         discounted_price_percentage: 20,
    //         product_imgs_id: '/image/stockpolish.png',
    //         category : 'best seller'
    //     },
    //     {
    //         product_id: 12300,
    //         name: 'Bright Red',
    //         product_type : 'nails',
    //         description: 'Lorem ipsum dolor sit adem, vattkai sollkai',
    //         price: 32,
    //         discounted_price_percentage: 20,
    //         product_imgs_id: '/image/stockpolish.png',
    //         category : 'best seller'
    //     },
    //     {
    //         product_id: 12300,
    //         name: 'Bright Red',
    //         product_type : 'nails',
    //         description: 'Lorem ipsum dolor sit adem, vattkai sollkai',
    //         price: 32,
    //         discounted_price_percentage: 20,
    //         product_imgs_id: '/image/stockpolish.png',
    //         category : 'best seller'
    //     },
    //     {
    //         product_id: 12300,
    //         name: 'Bright Red',
    //         product_type : 'nails',
    //         description: 'Lorem ipsum dolor sit adem, vattkai sollkai',
    //         price: 32,
    //         discounted_price_percentage: 20,
    //         product_imgs_id: '/image/stockpolish.png',
    //         category : 'best seller'
    //     }
    // ]

    return(
        <div
        className=" bg-secondary">
            {/* <Navbar/> */}
            <div>{isMobile?<></>:<AdSection />}</div>
            <FiltersContextProvider>
                <ProductsSection />
            </FiltersContextProvider>
            {/* <FooterSection /> */}
        </div>
    )
}

export default ProductsPage