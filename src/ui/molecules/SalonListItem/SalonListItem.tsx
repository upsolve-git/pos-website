import React from "react";
import { Salon } from "../../../interfaces/Salon";
import { useNavigate } from "react-router-dom";

interface SalonListItemProps {
    salon: Salon;
}

const SalonListItem: React.FC<SalonListItemProps> = ({ salon }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/salonDetail/${salon.salonName}`, { state: { salon } })}
        >
            <p className="text-lg font-semibold text-center mb-2">
                {salon.salonName}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {salon.contactEmail}
            </p>
        </div>
    );
};

export default SalonListItem;
