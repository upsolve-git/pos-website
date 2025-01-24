import axios from "axios"

import { AVAIL_STAFF_ENDPOINT } from "../constants/routes"

interface fetchStaffParams {
    serviceId: number // doubt with type
}
export const fetchStaff = async ({serviceId}: fetchStaffParams) => {
    try {
       let response = await axios.get(
        AVAIL_STAFF_ENDPOINT,
        { params: { serviceId: serviceId } }
      )
      return response.data
    //   setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
      throw new Error("Failed to fetch available staff.");
    }
};