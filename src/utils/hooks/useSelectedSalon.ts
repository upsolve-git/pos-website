import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const useSelectedSalon = () => {
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);

  const handleSalonChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedSalon(value || null); 
  };

  return {
    selectedSalon,
    handleSalonChange,
  };
};
