import React, { useEffect, useState } from "react";
import axios from "axios";
import AppointmentCard from "../ui/organisms/AppointmentCard/AppointmentCard";
import { Appointment } from "../interfaces/Appointment";

const AppointmentHistoryPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const authResponse = await axios.get("https://posapi.canadiangelnails.com/api/auth/getauth", { withCredentials: true });
        const customer_id = authResponse.data.userId;  
        const response = await axios.get(`https://posapi.canadiangelnails.com/api/customer/appointments/customer/${customer_id}`);
        setAppointments(response.data); // Assuming the API returns a list of appointments
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Error fetching appointments");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (appointments.length === 0) {
    return <div>No appointments found.</div>;
  }

  return (
    <div
        className="w-[90%] mx-auto mt-10">  
    <div className="grid grid-cols-1 gap-6 desktop:grid-cols-3">
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.appointment_id} appointment={appointment} />
      ))}
    </div>
    </div>
  );
};

export default AppointmentHistoryPage;
