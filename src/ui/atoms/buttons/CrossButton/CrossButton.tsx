import React from "react";
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE } from "../../../../constants/routes";

import { IoIosClose } from "react-icons/io";

const CrossButton: React.FC = () =>{ 
    const navigate = useNavigate()
    return (
        <button 
        onClick={() =>navigate(HOME_PAGE)}
        className="w-full h-fit flex justify-end text-darkgray float-right text-2xl pt-2 pr-4">
                <IoIosClose />
        </button>
    )
}

export default CrossButton