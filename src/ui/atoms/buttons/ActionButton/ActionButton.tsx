import React from "react";

interface ActionButtonProps{
    label: string,
    callbackFunc: ()=>void
}

const ActionButton: React.FC<ActionButtonProps> = ({label, callbackFunc}) => {
    return(
        <button
        onClick={callbackFunc}
        className="w-full px-3 h-fit py-2 bg-primary text-white rounded-3xl text-xs mt-1 mb-1 tablet:text-sm desktop:text-lg">
            {label}
        </button>
    )
}

export default ActionButton