import { useState } from "react";
import { setUserDetails } from "../../services/user";

import { User } from "../../interfaces/User";

const useProfileForm = (initialProfile: Record<string, any>) => {

  const [profile, setProfile] = useState(initialProfile);
  const [previousProfile, setPreviousProfile] = useState(initialProfile);

  const startEditing = () => {
    setPreviousProfile(profile);
  };

  const saveProfile = async (updatedProfile: User) => {
    console.log("Profile to save:", updatedProfile);

    const response = await setUserDetails(updatedProfile);
    
    if (response) {
        console.log("Profile updated successfully on server");
        setProfile(updatedProfile);
    } else {
        console.error("Failed to update profile on server");
    }
  };

  const cancelEditing = () => {
    console.log("Reverted profile:", previousProfile);
    setProfile(previousProfile); 
  };

  return { profile, startEditing, saveProfile, cancelEditing };
};

export default useProfileForm;
