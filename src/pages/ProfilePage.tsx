import React, { useState, useEffect } from "react";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";
import CommonButton from "../ui/atoms/buttons/CommonButton/CommonButton";
import useProfileForm from "../utils/hooks/useProfileForm";
import { getUserDetails } from "../services/user";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Record<string, any> | null>(null);
  const { startEditing, saveProfile, cancelEditing } = useProfileForm(profile || {});
  const [editProfileFlag, setEditProfileFlag] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const userDetails = await getUserDetails();
      if (userDetails) {
        setProfile(userDetails);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading...</p>; 
  }

  const handleSave = () => {
    const updatedProfile = {
      firstName: (document.getElementById("first-name") as HTMLInputElement).value || profile.firstName,
      lastName: (document.getElementById("last-name") as HTMLInputElement).value || profile.lastName,
      email: (document.getElementById("user-mail") as HTMLInputElement).value || profile.email,
      phone: (document.getElementById("contact-number") as HTMLInputElement).value || profile.phone,
    };

    console.log("Saving profile with data:", updatedProfile);
    saveProfile(updatedProfile);
    setEditProfileFlag(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>First name: {profile.firstName}</p>
      <p>Last name: {profile.lastName}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      {!editProfileFlag && <ActionButton label="Edit" callbackFunc={startEditing} />}
      {editProfileFlag && (
        <>
          <CommonButton label="Save" primaryColor="white" secondaryColor="primary" callBack={handleSave} />
          <CommonButton label="Cancel" primaryColor="red" secondaryColor="white" callBack={cancelEditing} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;