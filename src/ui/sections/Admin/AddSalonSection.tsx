import React from "react";
import { useAddSalonForm } from "../../../utils/hooks/useAddSalon";
import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

interface AddSalonSectionProps {}

export const AddSalonSection: React.FC<AddSalonSectionProps> = () => {
  const {
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
    handleAddSalon,
  } = useAddSalonForm();

  return (
    <div className="flex justify-evenly pb-6 tablet:pb-0">
      <div className="flex flex-col items-center">
        <table className="table-auto text-md border-separate border-spacing-4">
          <tbody>
            <TextInput
              value={salonName}
              label="Salon Name"
              onChange={(e) => setSalonName(e.target.value)}
            />
            <TextInput
              value={ownerName}
              label="Owner Name"
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <TextInput
              value={contactEmail}
              label="Contact Email"
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <TextInput
              value={contactMobile}
              label="Contact Mobile"
              onChange={(e) => setContactMobile(e.target.value)}
            />
            <TextInput
              value={bankAccount}
              label="Bank Account"
              onChange={(e) => setBankAccount(e.target.value)}
            />
            <NumberInput
              value={numberOfSystems ?? 0}
              label="Number of Systems"
              callbackFunc={(e) => setNumberOfSystems(Number(e.target.value))}
            />
            <NumberInput
              value={pricePerSystem ?? 0}
              label="Price per System"
              callbackFunc={(e) => setPricePerSystem(Number(e.target.value))}
            />
            <TextInput
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
              value={confirmPassword}
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </tbody>
        </table>
        <div className="w-[60%]">
          <ActionButton 
          label="Add Salon"
          callbackFunc={handleAddSalon}
          />
        </div>
        <p>
          {error === "false" && (
            <span className="text-green font-medium">Added successfully</span>
          )}
          {error !== "" && error !== "false" && (
            <span className="text-red font-medium">{error}</span>
          )}
        </p>
      </div>
    </div>
  );
};
