import React from "react";

interface ListOpenerProps{
    rotate: string
}

const ListOpener: React.FC<ListOpenerProps> = ({
    rotate
})=>{
    let rot: string = rotate
    return (
        <div
        className={rotate}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07273 0.666748L0 1.73947L6 7.73946L12 1.73947L10.9273 0.666748L6 5.59399L1.07273 0.666748Z" fill="#323743"/>
            </svg>
        </div>
    )
}

export default ListOpener