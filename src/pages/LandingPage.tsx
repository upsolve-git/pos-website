import React from "react";

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import ServicesSection from "../ui/sections/ServicesSection/ServicesSection";
import { dumsalons } from "../constants/dumySalons";
import { useSelectedSalon } from "../utils/hooks/useSelectedSalon";
import SalonsSection from "../ui/sections/SalonsSection/SalonsSection";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {

  return (
    <div className="w-[90%] mx-auto mt-10 tablet:w-full">
      <div
      className="mx-auto tablet:w-[70%] text-sm tablet:text-md desktop:text-lg">
        <p
        className="font-bold text-primary text-lg font-lexend desktop:text-2xl">
            Salon Partners
        </p>
        <SalonsSection />
          {/* <FormControl fullWidth>
              <InputLabel id="select-label">Salon</InputLabel>
              <Select
              labelId="select-label"
              id="select"
              value={selectedSalon||undefined}
              label="Age"
              onChange={handleSalonChange}
              >
                  <MenuItem value="">
                      <em>None</em>
                  </MenuItem>
                  {
                      dumsalons.map((salon) => (
                          <MenuItem value={salon.salonName}>{salon.salonName}</MenuItem>
                      ))
                  }
              </Select>
          </FormControl> */}
      </div>
      {/* {selectedSalon && (
        <div className="mt-8 mx-auto tablet:w-[70%]">
            <h3
            className="font-bold text-primary text-lg font-lexend desktop:text-2xl">
                Services for {selectedSalon}
            </h3>
            <ServicesSection />
        </div>
      )} */}
    </div>
  );
};

export default LandingPage;
