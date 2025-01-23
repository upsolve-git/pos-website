import { useState } from "react";

export const useAddSalonForm = () => {
  const [salonName, setSalonName] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMobile, setContactMobile] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [numberOfSystems, setNumberOfSystems] = useState<number>(0);
  const [pricePerSystem, setPricePerSystem] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddSalon = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    console.log({
      salonName,
      ownerName,
      contactEmail,
      contactMobile,
      bankAccount,
      numberOfSystems,
      pricePerSystem,
      password,
    });
    // add service call here anna
    setError("false"); 
  };

  return {
    salonName,
    setSalonName,
    ownerName,
    setOwnerName,
    contactEmail,
    setContactEmail,
    contactMobile,
    setContactMobile,
    bankAccount,
    setBankAccount,
    numberOfSystems,
    setNumberOfSystems,
    pricePerSystem,
    setPricePerSystem,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    handleAddSalon,
  };
};
