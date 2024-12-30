import React from "react";

interface NailPolishProps {
    name: string,
    description: string, 
    nailPolishPath: string
}

const NailPolish: React.FC<NailPolishProps> = ({
    name,
    description,
    nailPolishPath
})=>{
    return (
        <div
        className="flex flex-col items-center">
            <img src={nailPolishPath} alt="" 
            className="w-[70px] h-[120px] -translate-x-[15px] tablet:w-[90px] tablet:h-[150px] desktop:w-[150px] desktop:h-[235px] monitor:w-[300px] monitor:h-[450px]"/>
            <h1
            className="text-xs desktop:pl-10 p-6 font-semibold block tablet:text-md desktop:text-lg">
                {name}
            </h1>
            <p
            className=" text-xxs desktop:pl-8 tablet:text-xs desktop:text-sm">
                {description}
            </p>
        </div>
    )
}

export default NailPolish