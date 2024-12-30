import React from "react";
import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

interface AdSectionProps{}

const AdSection: React.FC<AdSectionProps> = ()=>{

    const callback = ()=>{
        console.log('shop now');
    }

    return(
        <div
        className="relative h-fit">
            <img src="/image/wrapper/image.png" alt="" 
            className="w-full h-auto"/>
            <div
            className="grid grid-cols-2 h-full absolute inset-0 z-40 text-primary">
                <div></div>
                <div
                className="flex flex-col items-center justify-evenly mx-32">
                    <h1
                    className="font-bold text-lg font-lexend desktop:text-3xl">
                        Nail Elegance
                    </h1>
                    <p
                    className="text-center text-md font-thin font-lexend desktop:text-xl">
                        Indulge in high-quality products designed to give you the perfect nail care.
                    </p>

                    <div className="w-[30%] mx-auto">
                 <CommonButton 
                    label="Shop now!"
                    primaryColor="secondary"
                    secondaryColor="primary"
                    callBack={callback}/>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default AdSection