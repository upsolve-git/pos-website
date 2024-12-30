import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../ui/atoms/Logo/Logo";

interface ErrorPageProps{}

const ErrorPage: React.FC<ErrorPageProps> = ()=>{
    const navigate = useNavigate()
    return(
        <div
        className="h-screen w-screen bg-secondary px-2 py-3 tablet:px-[20%] tablet:py-[5%]">
            <Logo
            fill="#C26F2D"
            styles="w-10 h-10 tablet:w-14 tablet:h-14 desktop:w-16 desktop:h-16 monitor:h-40 monitor:h-40"/>
            <div
            className="desktop:text-xl">
                <p>Oops, this page has either been removed or does not exist.</p>
                <p>Redirect to  
                    <span
                    className="text-primary"
                    onClick={()=>navigate('/')}>
                        Home
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage