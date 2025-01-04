import React from "react";
import { useNavigate } from "react-router-dom";
import { Appointment } from "../../../interfaces/Appointment";

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/appointmentDetail/${appointment.appointment_id}`, { state: { appointment } });
  };

  return (
    <div
    className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-montserrat transition-transform transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
    onClick={handleCardClick}
    >
      <p className="text-primary font-bold text-xl mb-2">{appointment.serviceName}</p>
      <p className="text-sm text-darkgray">
        <span className="font-semibold">Date:</span> {appointment.date}
      </p>
      <p className="text-sm text-darkgray">
        <span className="font-semibold">Time:</span> {appointment.startTime}
      </p>
      <p className="text-sm text-darkgray">
        <span className="font-semibold">Status:</span> {appointment.status}
      </p>
      {/* <p className="text-sm text-darkgray">
        <span className="font-semibold">Payment:</span> {appointment.paymentStatus}
      </p> */}
    </div>
  );
};

export default AppointmentCard;
