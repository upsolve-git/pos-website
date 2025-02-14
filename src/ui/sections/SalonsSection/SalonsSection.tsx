import React from "react";

import SalonListItem from "../../molecules/SalonListItem/SalonListItem";
import { dumsalons } from "../../../constants/dumySalons";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../constants/routes";
interface SalonsSectionProps{}

const SalonsSection: React.FC<SalonsSectionProps> = ()=>{
    let [salons, setSalons] = useState([])  
    useEffect(() => {

        const getSalons = async() => {
            try {   
                const salons = await axios.get(
                    base_url + "api/customer/get-all-salons",
                    { withCredentials: true }
                ); 
                const transformedSalons = salons.data.salons.map((salon:any) => ({
                    salonId: salon.id,
                    salonName: salon.salon_name,
                    ownerName: salon.owner_name,
                    contactEmail: salon.contact_email,
                    contactMobile: salon.contact_mobile,
                    bankAccount: salon.bank_account,
                    numberOfSystems: salon.number_of_systems,
                    pricePerSystem: parseFloat(salon.price_per_system), // Convert string to number
                  }));
                setSalons(transformedSalons);
            } catch (error) {
                console.error("Error fetching salons:", error);
            }
        };
        
        getSalons();
    }, [])

    return (
        <div className="grid gap-4 
    grid-cols-1 
    tablet:grid-cols-2 
    desktop:grid-cols-3">
            {
                salons.map(salon=><SalonListItem salon={salon}/>)
            }
        </div>
    )
}

export default SalonsSection