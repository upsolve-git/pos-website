import { useState } from "react";
import { getUserDetails } from "../../services/user";

const useProfileForm = (initialProfile: Record<string, any>) => {

  const [profile, setProfile] = useState(initialProfile);
  const [previousProfile, setPreviousProfile] = useState(initialProfile);

  const startEditing = () => {
    setPreviousProfile(profile);
  };

  const saveProfile = (updatedProfile: Record<string, any>) => {
    console.log("Profile to save:", updatedProfile); 
    setProfile(updatedProfile);
  };

  const cancelEditing = () => {
    console.log("Reverted profile:", previousProfile);
    setProfile(previousProfile); 
  };

  return { profile, startEditing, saveProfile, cancelEditing };
};

export default useProfileForm;
