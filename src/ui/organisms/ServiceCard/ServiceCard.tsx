import React from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../../../interfaces/Service";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-montserrat transition-transform transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
      onClick={() => navigate(`/serviceDetail/${service.id}`, { state: { service } })} // Example URL
    >
      {/* Service Name */}
      <p className="text-primary font-bold text-xl mb-2">{service.name}</p>

      {/* Service Description */}
      <p className="text-darkgray text-sm mb-4 line-clamp-2">{service.description}</p>

      {/* Service Details */}
      <div className="space-y-2 text-sm text-darkgray w-[60%] mx-auto">
        <p className="flex justify-between">
          <span className="font-semibold">Duration:</span>
          <span>{service.duration}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-semibold">Price:</span>
          <span>${service.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
