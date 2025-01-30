import axios from "axios";
import { GET_USER_PROFILE, GET_AUTH_REQ } from "../constants/routes";

export const getAuthCustomerId = async () => {
  const authResponse = await axios.get(GET_AUTH_REQ, { withCredentials: true });
  return authResponse.data.userId;
};

export const getUserDetails = async () => {
  try {
    const uId = await getAuthCustomerId(); // Await to get the actual userId
    const response = await axios.get(GET_USER_PROFILE, {
      params: { userId: uId },
    });
    return response.data; // Ensure function returns data
  } catch (err) {
    console.error("Error fetching user details:", err);
    return null; // Return null or a default object on error
  }
};