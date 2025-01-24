import axios from "axios";
import { BOOK_APPOINT_ENDPOINT, GET_AUTH_REQ } from "../constants/routes";

interface BookAppointmentParams {
  customerId: number;
  serviceId: number;
  staffId: number;
  date: string; // Format: YYYY-MM-DD
  startTime: string; // Format: HH:mm:ss
}

export const bookAppointment = async ({
  customerId,
  serviceId,
  staffId,
  date,
  startTime,
}: BookAppointmentParams) => {
  const response = await axios.post(
    BOOK_APPOINT_ENDPOINT,
    {
      customer_id: customerId,
      service_id: serviceId,
      staff_id: staffId,
      date: date,
      startTime: startTime,
    }
  );

  return response; // Return the response for handling in the component
};

export const getAuthCustomerId = async () => {
  const authResponse = await axios.get(
    GET_AUTH_REQ,
    { withCredentials: true }
  );

  return authResponse.data.userId; // Return the userId
};