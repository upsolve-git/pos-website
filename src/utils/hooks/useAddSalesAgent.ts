import axios from "axios";
import { useState } from "react";
import { base_url } from "../../constants/routes";

export const useAddSalesAgentForm = () => {
  const [agentName, setAgentName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMobile, setContactMobile] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddSalesAgent = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log({
      agentName,
      contactEmail,
      contactMobile,
      bankAccount,
      password,
    });

    const agentData = {
      agent_name: agentName,  // sending the data in snake_case
      contact_email: contactEmail,  // sending the data in snake_case
      contact_mobile: contactMobile,  // sending the data in snake_case
      bank_account: bankAccount,  // sending the data in snake_case
      password,  // password remains the same
    };

    try {
      const response = await axios.post(base_url + "api/admin/add-agent", { agent: agentData });
      console.log("Agent added successfully:", response.data);
      setError("false");
    } catch (error: any) {
      console.error("Error adding agent:", error.response ? error.response.data : error.message);
      setError("Failed to add agent");
    }
  };

  return {
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
    setError,
    handleAddSalesAgent,
  };
};
