import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../atoms/Logo/Logo";

import { LOGIN_PAGE, SIGNUP_PAGE } from "../../../constants/routes";
import { useSignInPage } from "../../../utils/hooks/useSignInPage";

interface SmallNavbarProps {}

const SmallNavbar: React.FC<SmallNavbarProps> = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    let {isAuthenticated,logoutHandler} = useSignInPage()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="p-2 flex justify-between items-center">
            <div>
                
            </div>
            {/* <Logo styles="w-12 h-12" fill="#C26F2D" /> */}
            <div className="relative">
                <div onClick={toggleMenu} className="cursor-pointer">
                    <svg
                        width="24"
                        height="8"
                        viewBox="0 0 24 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="0.5" x2="24" y2="0.5" stroke="black" />
                        <line y1="7.5" x2="24" y2="7.5" stroke="black" />
                    </svg>
                </div>

                {menuOpen && (
                    <ul className="absolute right-0 top-full mt-2 bg-white shadow-lg p-2 text-xs z-50">
                        <li className="py-1 px-2 "><a href="/">Home</a></li>
                        <li className="py-1 px-2 "><a href="/wallet">Wallet</a></li>
                        {/* <li className="py-1 px-2 ">About</li>
                        <li className="py-1 px-2 "><a href="/products">Products</a></li>
                        <li className="py-1 px-2 ">Contact</li> */}
                        { !isAuthenticated && <li className="py-1 px-2 ">
                            <button
                            onClick={() => navigate(SIGNUP_PAGE)}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Register
                            </button>
                        </li>}
                        { !isAuthenticated && <li className="py-1 px-2 ">
                            <button
                            onClick={() => navigate(LOGIN_PAGE)}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Sign In
                            </button>
                        </li>} 
                        {/* { isAuthenticated && <li className="py-1 px-2 "><a href="/cart">Cart</a></li>} */}
                        { isAuthenticated && <li className="py-1 px-2 "><a href="/appointments">Appointments</a></li>}
                        { isAuthenticated && <li className="py-1 px-2 ">
                            <button
                            onClick={() => logoutHandler()}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Logout
                            </button>
                        </li>}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SmallNavbar;
