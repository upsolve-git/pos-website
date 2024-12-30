import React from "react";

import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

interface ProdListSwitcherProps{
    isBestSeller: boolean,
    updateProducts : () => void
    setIsBestSeller: React.Dispatch<React.SetStateAction<boolean>>
}

const ProdListSwitcher: React.FC<ProdListSwitcherProps> = ({
    isBestSeller,
    setIsBestSeller,
    updateProducts
})=>{
    return (
        <div
        className="w-[80%] my-16 bg-white rounded-md flex justify-center items-stretch tablet:w-[40%]">
            <CommonButton 
            label="Best-Sellers"
            primaryColor={isBestSeller?"secondarylight":"white"}
            secondaryColor="black"
            callBack={()=>{setIsBestSeller(true); updateProducts();}}/>
            <CommonButton
            label="New Products"
            primaryColor={!isBestSeller?"secondarylight":"white"}
            secondaryColor="black"
            callBack={()=>setIsBestSeller(false)}/>
        </div>
    )
}

export default ProdListSwitcher