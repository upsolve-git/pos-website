import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "../../organisms/ServiceCard/ServiceCard";
import { Service } from "../../../interfaces/Service";

const ServicesGrid = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://posapi.canadiangelnails.com/api/customer/services");
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
    <div className="grid grid-cols-1 gap-6 desktop:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;
