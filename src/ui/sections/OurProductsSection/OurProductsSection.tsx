import React from "react";

interface OurProductsSectionProps{}

const OurProductsSection: React.FC<OurProductsSectionProps> = ()=>{
    return(
        <div
        className="h-fit w-screen bg-secondary bg-contain flex flex-col items-center pt-4 tablet:bg-sectionBg tablet:pt-8 desktop:py-11 monitor:pt-20">
            <h1
            className="font-semibold p-20 text-secondarydark text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
                OUR PRODUCTS
            </h1>
            <div
            className=" desktop:mx-[10%] grid grid-cols-4 grid-rows-2 gap-4 my-3 tablet:mx-5">
                <img src="/image/cats/nailpolishes.png" alt="" 
                className="col-span-2 row-span-2"/>
                <img src="/image/cats/limitedproducts.png" alt="" />
                <img src="/image/cats/nailcare.png" alt="" />
                <img src="/image/cats/trendingnailcolors.png" alt="" />
                <img src="/image/cats/nailcaretools.png" alt="" />
            </div>
        </div>
    )
}

export default OurProductsSection