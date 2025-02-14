import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE, SIGNUP_PAGE } from "../../../constants/routes";
import { useSignInPage } from "../../../utils/hooks/useSignInPage";

interface BigNavbarProps{}

const BigNavbar: React.FC<BigNavbarProps> = ()=>{
    const navigate = useNavigate()

    let {isAuthenticated,logoutHandler} = useSignInPage()

    return(
        <div
        className="bg-secondarylight px-6 py-2 flex justify-between items-center">
            <Logo 
            styles="w-14 h-14 desktop:w-20 desktop:h-20 opacity-0"
            fill="#C26F2D" />
            <ul
    className="text-xxs flex items-center justify-end text-primary space-x-4 desktop:text-sm">
    <li><a href="/">Home</a></li>
    <li><a href="/wallet">Wallet</a></li>
    {isAuthenticated && (
        <li>
            <a href="/appointments">Appointments</a>
        </li>
    )}
    {!isAuthenticated && (
        <li>
            <button
                onClick={() => navigate(SIGNUP_PAGE)}
                className="border border-primary px-2 py-1 rounded-lg">
                Register
            </button>
        </li>
    )}
    {!isAuthenticated && (
        <li>
            <button
                onClick={() => navigate(LOGIN_PAGE)}
                className="bg-primary text-white px-2 py-1 rounded-lg">
                Sign In
            </button>
        </li>
    )}
    {isAuthenticated && (
        <li>
            <button
                onClick={() => logoutHandler()}
                className="bg-primary text-white px-2 py-1 rounded-lg">
                Log out
            </button>
        </li>
    )}
</ul>



        </div>
    )
}

export default BigNavbar