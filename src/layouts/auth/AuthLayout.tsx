import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps{}

const AuthLayout: React.FC<AuthLayoutProps> = () =>{
    return (
        <div
        className="bg-authBg bg-cover min-h-screen h-fit tablet:bg-right tablet:py-5 desktop:py-9">
            <Outlet />
        </div>
    )
}

export default AuthLayout