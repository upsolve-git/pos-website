import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../ui/organisms/Navbar/Navbar"
import FooterSection from "../ui/sections/FooterSection/FooterSection"

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = () =>{
    return (
        <div
        className="font-montserrat min-h-screen flex flex-col bg-secondary">
            <Navbar />
            <main
            className="flex-grow overflow-x-hidden">
                <Outlet />
            </main>
            {/* <FooterSection /> */}
        </div>
    )
}

export default DefaultLayout