import React from "react";

import TextInput from "../../atoms/formElements/textInput/textInput";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

import { useAddSalesAgentForm } from "../../../utils/hooks/useAddSalesAgent";

interface AddSalesAgentSectionProps {}

const AddSalesAgentSection: React.FC<AddSalesAgentSectionProps> = () => {
  const {
    agentName,
    setAgentName,
    contactEmail,
    setContactEmail,
    contactMobile,
    setContactMobile,
    bankAccount,
    setBankAccount,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    handleAddSalesAgent,
  } = useAddSalesAgentForm();

  return (
    <div className="flex justify-evenly pb-6 tablet:pb-0">
      <div className="flex flex-col items-center">
        <table className="table-auto text-md border-separate border-spacing-4">
          <tbody>
            <TextInput
              value={agentName}
              label="Agent Name"
              onChange={(e) => setAgentName(e.target.value)}
            />
            <TextInput
              value={contactEmail}
              label="Agent Email"
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
          <ActionButton label="Add Agent" callbackFunc={handleAddSalesAgent} />
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

export default AddSalesAgentSection;
