import React from "react";

interface ArrowButtonProps{
    rotation: string,
    clickFunc: ()=>void
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
    rotation,
    clickFunc
})=>{
    return(
        <button
        onClick={clickFunc}
        className={`bg-secondarydark rounded-full w-fit h-fit px-1 py-1 rotate-${rotation} mx-4`}>
            <svg className="w-6 h-6 desktop:w-8 desktop:h-8" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.7071 8.7071C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.92893C19.9526 0.538406 19.3195 0.538406 18.9289 0.928931C18.5384 1.31945 18.5384 1.95262 18.9289 2.34314L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.7071ZM8.74228e-08 9L26 9L26 7L-8.74228e-08 7L8.74228e-08 9Z" fill="black"/>
            </svg>
        </button>
    )
}

export default ArrowButton