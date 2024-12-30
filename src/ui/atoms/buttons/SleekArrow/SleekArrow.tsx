import React from "react";

interface SleekArrowButtonProps{
    rotation: string,
    callBackFunc: ()=>void
}

const SleekArrowButton: React.FC<SleekArrowButtonProps> = ({
    rotation,
    callBackFunc,
})=>{
    return(
        <button
        onClick={callBackFunc}
        className={`w-fit h-fit rotate-${rotation} z-20`}>
            <svg className="w-6 h-24 desktop:w-16 desktop:h-16" viewBox="0 0 69 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M69 15.3261V14.6739C62.4852 11.4131 57.0055 6.47425 54.995 4.95911e-05C54.9937 -0.00423813 54.5339 0.266506 54.5093 0.274458C54.4846 0.282452 54.5366 0.270428 54.5381 0.275364C56.0617 5.22808 61.8337 11.1025 66.0582 14.6739C45.4074 14.2128 20.6332 14.9068 0 14.3479L0 15.6522L66.0582 15.3261C61.8337 18.8975 56.1895 24.9928 54.6535 30L55.362 30C57.3547 23.513 61.6026 19.5652 69 15.3261Z" fill="#C26F2D" />
            </svg>
        </button>
    )
}

export default SleekArrowButton