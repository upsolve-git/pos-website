import React, { useState } from "react";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";
import CommonButton from "../ui/atoms/buttons/CommonButton/CommonButton";
import useProfileForm from "../utils/hooks/useProfileForm";

const ProfilePage: React.FC = () => {
  const initialProfile = {
    firstName: "John",
    lastName: "Doe",
    email: "example@mail.com",
    phone: "6025654657",
    addressLine1: "1216 E Vista Del Cerro Dr",
    addressLine2: "Apt 1027",
    city: "Tempe",
    state: "Arizona",
    country: "Canada",
    zipcode: "85281",
  };

  const { profile, startEditing, saveProfile, cancelEditing } = useProfileForm(initialProfile);
  const [editProfileFlag, setEditProfileFlag] = useState(false);

  const handleSave = () => {
    const updatedProfile = {
      firstName: (document.getElementById("first-name") as HTMLInputElement).value || profile.firstName,
      lastName: (document.getElementById("last-name") as HTMLInputElement).value || profile.lastName,
      email: (document.getElementById("user-mail") as HTMLInputElement).value || profile.email,
      phone: (document.getElementById("contact-number") as HTMLInputElement).value || profile.phone,
      addressLine1: (document.getElementById("addline1") as HTMLInputElement).value || profile.addressLine1,
      addressLine2: (document.getElementById("addline2") as HTMLInputElement).value || profile.addressLine2,
      city: (document.getElementById("city") as HTMLInputElement).value || profile.city,
      state: (document.getElementById("state") as HTMLInputElement).value || profile.state,
      country: (document.getElementById("country") as HTMLInputElement).value || profile.country,
      zipcode: (document.getElementById("zipcode") as HTMLInputElement).value || profile.zipcode,
    };

    console.log("Saving profile with data:", updatedProfile); 
    saveProfile(updatedProfile);
    setEditProfileFlag(false);
  };

  const handleEdit = () => {
    startEditing();
    setEditProfileFlag(true);
  };

  const handleCancel = () => {
    console.log("Cancelling edit, reverting profile.");
    cancelEditing();
    setEditProfileFlag(false);
  };

  return (
    <div>
      <div className="w-full h-[80vh] bg-secondary pt-8">
        <h2 className="text-center text-lg font-semibold text-primary tablet:text-xl desktop:text-xl">
          User Profile
        </h2>
        <div className="w-[70%] mx-auto mt-9 text-xs tablet:text-sm desktop:text-xl">
          <table className="table-auto w-full">
            <tr>
              <td className="font-semibold">First name</td>
              <td>
                {!editProfileFlag ? profile.firstName : <input type="text" id="first-name" defaultValue={profile.firstName} />}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Last name</td>
              <td>
                {!editProfileFlag ? profile.lastName : <input type="text" id="last-name" defaultValue={profile.lastName} />}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Email</td>
              <td>
                {!editProfileFlag ? profile.email : <input type="email" id="user-mail" defaultValue={profile.email} />}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Phone</td>
              <td>
                {!editProfileFlag ? profile.phone : <input type="number" id="contact-number" defaultValue={profile.phone} />}
              </td>
            </tr>
          </table>
          <p className="font-semibold">Address</p>
          <p className="font-semibold">Address Line 1</p>
          {!editProfileFlag ? profile.addressLine1 : <input type="text" id="addline1" defaultValue={profile.addressLine1} />}
          <p className="font-semibold">Address Line 2</p>
          {!editProfileFlag ? profile.addressLine2 : <input type="text" id="addline2" defaultValue={profile.addressLine2} />}
          <p className="font-semibold">City</p>
          {!editProfileFlag ? profile.city : <input type="text" id="city" defaultValue={profile.city} />}
          <p className="font-semibold">State/Province</p>
          {!editProfileFlag ? profile.state : <input type="text" id="state" defaultValue={profile.state} />}
          <p className="font-semibold">Country</p>
          {!editProfileFlag ? profile.country : <input type="text" id="country" defaultValue={profile.country} />}
          <p className="font-semibold">Zipcode</p>
          {!editProfileFlag ? profile.zipcode : <input type="number" id="zipcode" defaultValue={profile.zipcode} />}
        </div>
        <div className="w-[60%] h-fit mx-auto mt-4 flex gap-8">
          {!editProfileFlag && (
            <div className="w-[50%] mx-auto">
              <ActionButton label="Edit" callbackFunc={handleEdit} />
            </div>
          )}
          {editProfileFlag && (
            <>
              <CommonButton label="Save" primaryColor="white" secondaryColor="primary" callBack={handleSave} customStyles="border-[0.1rem]" />
              <CommonButton label="Cancel" primaryColor="red" secondaryColor="white" callBack={handleCancel} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;