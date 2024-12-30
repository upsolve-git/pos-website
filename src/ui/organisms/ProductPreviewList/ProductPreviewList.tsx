import React, { useState } from "react";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import ArrowButton from "../../atoms/buttons/ArrowButton/ArrowButton";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";

interface ProductPreviewListProps {
    products: Product[];
    isBestSeller: boolean;
    ishomepage: boolean;
}

const ProductPreviewList: React.FC<ProductPreviewListProps> = ({
    products,
    isBestSeller,
    ishomepage
}) => {
    const [startIndex, setStartIndex] = useState<number>(0);
    const { isMobile, isTablet } = useMediaWidth();
    const maxGridItems = isTablet ? 3 : 4;
    
    const totalProducts = products.length;

    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalProducts);
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
    };

    const currentWindowProducts = products.slice(startIndex, startIndex + maxGridItems);

    if (currentWindowProducts.length < maxGridItems) {
        const remainingItems = maxGridItems - currentWindowProducts.length;
        currentWindowProducts.push(...products.slice(0, remainingItems));
    }

    return (
        <div className="w-[90%] h-fit flex justify-evenly items-center m-auto">
            {
                !isMobile &&
                <ArrowButton rotation="180" clickFunc={handleLeftClick} />
            }
            <div className="grid h-fit w-fit grid-cols-2 grid-rows-2 gap-6 tablet:grid-rows-1 tablet:grid-cols-3 desktop:grid-cols-4 desktop:px-6">
                {
                    currentWindowProducts.map((product, index) => (
                        <ProductPreviewCard
                            key={index}
                            product={product}
                            isBestSeller={isBestSeller}
                            ishomepage={ishomepage}
                        />
                    ))
                }
            </div>
            {
                !isMobile &&
                <ArrowButton rotation="0" clickFunc={handleRightClick} />
            }
        </div>
    );
};

export default ProductPreviewList;