import React from "react";

interface CommonButtonProps{
    label: string,
    primaryColor: string,
    secondaryColor: string,
    customStyles?: string,
    preIcon?: React.ReactNode
    callBack: ()=>void
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label,
    primaryColor,
    secondaryColor,
    customStyles='',
    preIcon,
    callBack
})=>{
    return (
        <button
        onClick={callBack}
        className={`text-xxs w-full rounded-md py-[0.1rem] px-[0.3rem] bg-${primaryColor} text-${secondaryColor} tablet:text-xs desktop:text-sm ${customStyles}`}>
            <div
            className="flex items-center w-fit m-auto">
            {preIcon}
            {label}
            </div>
        </button>
    )
}

export default CommonButton