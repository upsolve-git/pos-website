import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";

const AppointmentDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointment } = location.state;

  const handleCancelAppointment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customer/cancel-appointment",
        { appointment_id: appointment.appointment_id },
        { withCredentials: true } // Ensures authentication token or session cookie is sent
      );

      if (response.status === 200) {
        alert("Appointment canceled successfully.");
        navigate("/appointments"); // Redirect back to appointments page
      } else {
        alert("Failed to cancel the appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
      alert("Error canceling appointment. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] max-w-3xl bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="font-semibold text-primary text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">{appointment.serviceName}</h1>
        <p className="text-sm">
          <span className="font-semibold">Date:</span> {appointment.date}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Time:</span> {appointment.startTime}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Status:</span> {appointment.status}
        </p>
        {/* <p className="text-sm">
          <span className="font-semibold">Payment:</span> {appointment.paymentStatus}
        </p> */}
        {appointment.status !== "completed" && appointment.status !== "cancelled" && (
          <ActionButton
          label= "Cancel Appointment"
          callbackFunc={handleCancelAppointment}
        />
        )}
      </div>
    </div>
  );
};

export default AppointmentDetailPage;
