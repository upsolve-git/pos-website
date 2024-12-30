import React from "react";

interface AboutUsInfoProps{
    image:string,
    name:string,
    description:string,
    isRight: boolean
}

const AboutUsInfo: React.FC<AboutUsInfoProps> = ({
    image,
    name,
    description,
    isRight
})=>{
    return(
        <div
        className="flex justify-evenly px-3 py-10 items-start">
            <div
            className={`w-[50%] ${isRight?'order-last':''}`}>
                <div
                className="max-w-full text-xs text-primary tablet:text-md desktop:text-xl">
                   {name}
                </div>
                <hr className="text-primary w-[30%]"/>
                <div
                className="max-w-full pt-6 text-xxs tablet:text-xs desktop:text-md">
                    {description}
                </div>
            </div>
            <div
            className="min-w-fit px-3 bg-secondarylight rounded-t-full self-center m-auto tablet:w-[160px] tablet:h-[220px] desktop:h-[350px] desktop:w-[320px]">
                <img src={image} alt="" 
                className="pt-6 desktop:pt-14 w-[100px] h-[160px] tablet:w-[140px] tablet:h-[200px] desktop:h-[300px] desktop:w-[210px] m-auto"/>
            </div>
        </div>
    )
}

export default AboutUsInfo