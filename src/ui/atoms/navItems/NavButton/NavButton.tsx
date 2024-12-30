import React from "react";

interface NavButtonProps{
    label: string,
    isActive: boolean,
    onClick: ()=>void
}

const NavButton: React.FC<NavButtonProps> = ({
    label,
    isActive,
    onClick
})=>{
    return(
        <button
        onClick={onClick}
        className={`text-xs px-2 py-1 whitespace-nowrap mr-2 ${isActive?"bg-primary text-white":"bg-white text-primary"} rounded-3xl tablet:mr-0 tablet:rounded-sm desktop:text-md`}>
            {label}
        </button>
    )
}

export default NavButton