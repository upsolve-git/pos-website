import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";

// Utility function to generate dates from tomorrow to 30 days
const generateDates = () => {
  const dates = [];
  const today = new Date();
  today.setDate(today.getDate() + 1); // Start from tomorrow
  
  for (let i = 0; i < 30; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i); // Increment by i days
    const formattedDate = day.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    dates.push(formattedDate);
  }

  return dates;
};

interface ServiceDetailPageProps {}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state; // Access the service passed through state

  const [selectedDate, setSelectedDate] = useState<string>("default");
  const [selectedSlot, setSelectedSlot] = useState<string>("default");
  const [loading, setLoading] = useState<boolean>(false);

  const appointmentHandler = async () => {
    if (selectedDate === "default" || selectedSlot === "default") {
      alert("Please select both the day and the slot.");
    } else {
      try {
        setLoading(true);
        let customer_id;

        try {
          // Step 1: Check if user is authenticated
          const authResponse = await axios.get("https://posapi.canadiangelnails.com/api/auth/getauth", { withCredentials: true });
          customer_id = authResponse.data.userId;  
          console.log(customer_id)
          } catch (err: any) {
            alert("You need to log in to book an appointment.");
            navigate("/auth/sign-in"); // Redirect to login page
            return;
          }

        // Step 2: Proceed with booking the appointment
        console.log(service)
        const service_id = service.service_id

        console.log(customer_id, service_id, selectedDate, selectedSlot);
        const response = await axios.post("https://posapi.canadiangelnails.com/api/customer/book-appointment", {
          customer_id,
          service_id,
          date: selectedDate,
          startTime: selectedSlot,
        });

        if (response.status === 201) {
          alert("Appointment booked successfully!");
          navigate("/"); // Redirect to order page
        } else {
          alert("Failed to book appointment. Please try again.");
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        alert("Failed to book appointment. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const dates = generateDates(); // Get all dates from tomorrow to 30 days

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <div className="w-[90%] max-w-3xl bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
    //     <h1 className="font-semibold text-primary text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
    //       {service.name} {/* Service name passed via location.state */}
    //     </h1>
    //     <p className="text-darkgray mb-2">{service.desc}</p>
    //     <p className="">Duration: {service.duration}hrs</p>
    //     <p className="">Price: ${service.price}</p>
      

    //     <div className="flex pl-8 my-6">
    //       {/* Date Selection */}
    //       <select
    //         name="appointment-date"
    //         id="appointment-date"
    //         className="mr-7 p-3 border-2 border-gray-300 rounded-md"
    //         value={selectedDate}
    //         onChange={(e) => setSelectedDate(e.target.value)}
    //       >
    //         <option value="default">Select a day</option>
    //         {dates.map((date) => (
    //           <option key={date} value={date}>
    //             {date}
    //           </option>
    //         ))}
    //       </select>

    //       {/* Slot Selection */}
    //       <select
    //         name="appointment-slot"
    //         id="appointment-slot"
    //         className="mr-7 p-3 border-2 border-gray-300 rounded-md"
    //         value={selectedSlot}
    //         onChange={(e) => setSelectedSlot(e.target.value)}
    //       >
    //         <option value="default">Select a slot</option>
    //         <option value="11:30">11:30</option>
    //         <option value="12:30">12:30</option>
    //         <option value="13:30">13:30</option>
    //         <option value="14:30">14:30</option>
    //       </select>

    //       <div className="">
    //         <ActionButton
    //           label={loading ? "Booking..." : "Book Appointment"}
    //           callbackFunc={appointmentHandler}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="w-[90%] max-w-3xl bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
    <h1 className="font-semibold text-primary text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
      {service.name} {/* Service name passed via location.state */}
    </h1>
    <p className="text-darkgray mb-2">{service.desc}</p>
    <p className="">Duration: {service.duration}hrs</p>
    <p className="">Price: ${service.price}</p>

    <div className="flex flex-col gap-4 mt-6 tablet:flex-row tablet:items-center tablet:gap-6">
      {/* Date Selection */}
      <select
        name="appointment-date"
        id="appointment-date"
        className="p-3 border-2 border-gray-300 rounded-md w-full tablet:w-auto"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="default">Select a day</option>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>

      {/* Slot Selection */}
      <select
        name="appointment-slot"
        id="appointment-slot"
        className="p-3 border-2 border-gray-300 rounded-md w-full tablet:w-auto"
        value={selectedSlot}
        onChange={(e) => setSelectedSlot(e.target.value)}
      >
        <option value="default">Select a slot</option>
        <option value="11:30">11:30</option>
        <option value="12:30">12:30</option>
        <option value="13:30">13:30</option>
        <option value="14:30">14:30</option>
      </select>

      {/* Action Button */}
      <div className="w-full tablet:w-auto">
        <ActionButton
          label={loading ? "Booking..." : "Book Appointment"}
          callbackFunc={appointmentHandler}
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default ServiceDetailPage;
