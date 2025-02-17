import axios from "axios";
import { useState } from "react";
import { base_url } from "../../constants/routes";

export const useAddSalesAgentForm = () => {
  const [agentFirstName, setAgentFirstName] = useState<string>("");
  const [agentLastName, setAgentLastName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMobile, setContactMobile] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [commission, setCommission] = useState<number>(0);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddSalesAgent = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log({
      agentFirstName,
      agentLastName,
      contactEmail,
      contactMobile,
      bankAccount,
      commission,
      password,
    });

    const agentData = {
      first_name: agentFirstName,
      last_name: agentLastName,
      email: contactEmail,
      phone_number: contactMobile,
      bank_account: bankAccount,
      commision: commission,
      password: password,
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
    agentFirstName,
    setAgentFirstName,
    agentLastName,
    setAgentLastName,
    contactEmail,
    setContactEmail,
    contactMobile,
    setContactMobile,
    bankAccount,
    setBankAccount,
    commission,
    setCommission,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    handleAddSalesAgent,
  };
};