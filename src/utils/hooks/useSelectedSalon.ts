import { useState } from "react";

export const useSelectedSalon = () => {
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);

  const handleSalonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedSalon(value || null)
  };

  return {
    selectedSalon,
    handleSalonChange,
  };
};
