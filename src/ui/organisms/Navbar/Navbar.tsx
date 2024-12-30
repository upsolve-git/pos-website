import React from "react";

import SmallNavbar from "./SmallNavbar";
import BigNavbar from "./BigNavbar";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

interface NavbarProps{}

const Navbar: React.FC<NavbarProps> = ()=>{

    let {isMobile} = useMediaWidth()

    return(
        <div>
            {isMobile?<SmallNavbar/>:<BigNavbar />}
        </div>
    )
}

export default Navbar