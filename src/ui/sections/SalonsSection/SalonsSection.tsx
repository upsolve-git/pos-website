import React from "react";

import SalonListItem from "../../molecules/SalonListItem/SalonListItem";
import { dumsalons } from "../../../constants/dumySalons";

interface SalonsSectionProps{}

const SalonsSection: React.FC<SalonsSectionProps> = ()=>{
    const salons = dumsalons
    
    return (
        <div
        className="mx-auto font-manrope mb-10 hover:cursor-pointer">
            {
                salons.map(salon=><SalonListItem salon={salon}/>)
            }
        </div>
    )
}

export default SalonsSection