import axios from "axios";
import { BOOKED_APPOINTS_ENDPOINT } from "../constants/routes";

interface FetchBookedAppointmentsParams {
  selectedStaff: number;
}

export const fetchBookedAppointments = async ({ selectedStaff }: FetchBookedAppointmentsParams) => {
  if (!selectedStaff) throw new Error("Staff ID is required");
  
  const response = await axios.get(BOOKED_APPOINTS_ENDPOINT, {
    params: { staffId: selectedStaff },
  });
  return response.data; // Return the booked appointments data
};