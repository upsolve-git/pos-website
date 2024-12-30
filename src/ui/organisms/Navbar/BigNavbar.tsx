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
            className="text-xxs flex hover:cursor-pointer items-center justify-between text-primary w-[15%] desktop:text-sm">
                {/* <li><a href="/">Home</a></li>
                <li>About</li>
                <li><a href="/products">Products</a></li> */}
                { isAuthenticated && <li><a href="/orders">Orders</a></li> }
                {/* <li>Contact</li> */}
                { !isAuthenticated && <li>
                    <button 
                    onClick={() => navigate(SIGNUP_PAGE)}
                    className="border border-primary px-2 py-1 rounded-lg">
                        Sign Up
                    </button>
                </li>}
                { !isAuthenticated && <li>
                    <button
                    onClick={() => navigate(LOGIN_PAGE)}
                    className="bg-primary text-white px-2 py-1 rounded-lg">
                        Sign In
                    </button>
                </li> } 
                {/* { isAuthenticated && <li><a href="/cart">Cart</a></li>} */}
                { isAuthenticated && <li>
                    <button
                    onClick={() => logoutHandler()}
                    className="bg-primary text-white px-2 py-1 rounded-lg">
                        Log out
                    </button>
                </li> } 
            </ul>
        </div>
    )
}

export default BigNavbar