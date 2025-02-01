import axios from "axios";
import { GET_USER_PROFILE, GET_AUTH_REQ, SAVE_USER_PROFILE } from "../constants/routes";
import { log } from "console";

import { User } from "../interfaces/User";

export const getAuthCustomerId = async () => {
  const authResponse = await axios.get(GET_AUTH_REQ, { withCredentials: true });
  return authResponse.data.userId;
};

export const getUserDetails = async () => {
  try {
    const uId = await getAuthCustomerId();
    const response = await axios.get(GET_USER_PROFILE, {
      params: { userId: uId },
    });
    return response.data; 
  } catch (err) {
    console.error("Error fetching user details:", err);
    return null; 
  }
};

export const setUserDetails = async (userInfo: User) => {
    try {
        const uId = await getAuthCustomerId(); // Get authenticated user ID
        
        const response = await axios.post(SAVE_USER_PROFILE, {
            userId: uId,
            ...userInfo, // Spread user details into the request body
        });

        return response.data; // Return API response
    } catch (err) {
        console.error("Error updating user details:", err);
        return null; // Handle errors gracefully
    }
};
