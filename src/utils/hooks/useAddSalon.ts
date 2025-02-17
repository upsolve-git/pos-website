import axios from "axios";
import { useState } from "react";
import { base_url } from "../../constants/routes";

export const useAddSalonForm = () => {
  const [salonName, setSalonName] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [referralEmail, setReferralEmail] = useState<string>("");
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
    const salonData = {
      salon_name: salonName,  // sending the data in snake_case
      owner_name: ownerName,  // sending the data in snake_case
      contact_email: contactEmail,  // sending the data in snake_case
      referral_email: referralEmail,
      contact_mobile: contactMobile,  // sending the data in snake_case
      bank_account: bankAccount,  // sending the data in snake_case
      number_of_systems: numberOfSystems,  // sending the data in snake_case
      price_per_system: pricePerSystem,  // sending the data in snake_case
      password,  // password remains the same
    };

    axios
  .post(base_url + "api/admin/add-salon", { salon: salonData })
  .then((response) => {
    console.log('Salon added successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error adding salon:', error.response ? error.response.data : error.message);
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
    referralEmail,
    setReferralEmail,
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
