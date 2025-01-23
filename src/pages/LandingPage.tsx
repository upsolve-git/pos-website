import React from "react";
import ServicesSection from "../ui/sections/ServicesSection/ServicesSection";
import { dumsalons } from "../constants/dumySalons";
import { useSelectedSalon } from "../utils/hooks/useSelectedSalon";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const { selectedSalon, handleSalonChange } = useSelectedSalon();

  return (
    <div className="w-[90%] mx-auto mt-10">
      <div>
        <p>Select a salon</p>
        <select name="salon" id="salon" onChange={handleSalonChange}>
          <option value="">--Select a Salon--</option>
          {dumsalons.map((salon) => (
            <option key={salon.salonName} value={salon.salonName}>
              {salon.salonName}
            </option>
          ))}
        </select>
      </div>
      {selectedSalon && (
        <div className="mt-8">
          <h3 className="text-lg font-bold">Services for {selectedSalon}</h3>
          <ServicesSection />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
