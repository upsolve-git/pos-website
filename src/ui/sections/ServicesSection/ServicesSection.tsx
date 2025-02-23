import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../../organisms/ServiceCard/ServiceCard";
import { Service } from "../../../interfaces/Service";
import { base_url } from "../../../constants/routes";

interface ServicesSectionProps {
  salonId: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ salonId }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(base_url+`api/customer/services/${salonId}`);
        setServices(response.data); // Assuming the API returns a list of services
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error fetching services");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading services...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  return (
    <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.name} service={service} salonId={salonId}/>
      ))}
    </div>
  );
};

export default ServicesSection;
