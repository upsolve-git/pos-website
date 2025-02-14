import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ActionButton from "../ui/atoms/buttons/ActionButton/ActionButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { base_url } from "../constants/routes";

const ServiceDetailPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, salonId } = location.state; // Access the service passed through state
  console.log(salonId,"in test")
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null); // Staff ID
  const [staffList, setStaffList] = useState<
    { staff_id: number; name: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookedAppointments, setBookedAppointments] = useState<
    { date: string; time: string }[]
  >([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([
    "11:30:00",
    "12:30:00",
    "13:30:00",
    "14:30:00",
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch staff list for the service
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(
          base_url+`api/customer/available-staff`,
          { params: { serviceId: service.service_id, salonId : salonId } }
        );
        setStaffList(response.data);
      } catch (error) {
        console.error("Error fetching staff:", error);
        alert("Failed to fetch available staff.");
      }
    };

    fetchStaff();
  }, [service.service_id]);

  // Fetch booked appointments for selected staff in the next 30 days
  useEffect(() => {
    const fetchBookedAppointments = async () => {
      if (!selectedStaff) return;

      try {
        const response = await axios.get(
          base_url+`api/customer/booked-appointments`,

          { params: { staffId: selectedStaff } }
        );
        setBookedAppointments(response.data); // { date: "YYYY-MM-DD", time: "HH:mm" }
      } catch (error) {
        console.error("Error fetching booked appointments:", error);
        alert("Failed to fetch booked appointments.");
      }
    };

    fetchBookedAppointments();
  }, [selectedStaff]);

  const appointmentHandler = async () => {
    if (!selectedStaff || !selectedDate || !selectedTime) {
      alert("Please select staff, date, and time.");
      return;
    }

    try {
      setLoading(true);
      let customer_id;

      try {
        const authResponse = await axios.get(
          base_url+"api/auth/isAdmin",
          { withCredentials: true }
        );
        customer_id = authResponse.data.userId;
      } catch (err: any) {
        alert("You need to log in to book an appointment.");
        navigate("/auth/sign-in");
        return;
      }

      const service_id = service.service_id;
      const formattedDate = selectedDate.toISOString().split("T")[0];

      const response = await axios.post(
        base_url+ "api/customer/book-appointment",
        {
          customer_id,
          service_id,
          staff_id: selectedStaff,
          date: formattedDate,
          startTime: selectedTime,
        }
      );

      if (response.status === 201) {
        alert("Appointment booked successfully!");
        navigate("/");
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSlots = (): { time: string; available: boolean }[] => {
    if (!selectedDate || !bookedAppointments) return [];
  
    // Ensure selectedDate is in the format 'YYYY-MM-DD'
    const formattedDate = selectedDate.toISOString().split("T")[0];
  
    // Get booked times by filtering and mapping
    const bookedTimes = bookedAppointments
      .filter((appt) => {
        const apptDate = appt.date.split("T")[0]; // assuming appt.date is in ISO string format
        return apptDate === formattedDate;
      })
      .map((appt) => appt.time);
  
    console.log(bookedTimes);
    console.log(availableSlots);
    // Map available slots to availability based on booked times
    return availableSlots.map((slot) => ({
      time: slot,
      available: !bookedTimes.includes(slot),
    }));
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] max-w-3xl bg-white border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h1 className="font-semibold text-primary text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
          {service.name}
        </h1>
        <p className="text-darkgray mb-2">{service.desc}</p>
        <p>Duration: {service.duration}hrs</p>
        <p>Price: ${service.price}</p>

        <div className="flex flex-col gap-4 mt-6 tablet:flex-row tablet:items-center tablet:gap-6">
          {/* Staff Selection Dropdown */}
          <div className="w-full tablet:w-auto">
            <select
              name="staff-selector"
              id="staff-selector"
              className="p-3 border-2 border-gray-300 rounded-md w-full"
              value={selectedStaff || "default"}
              onChange={(e) => {
                setSelectedStaff(Number(e.target.value));
                setSelectedDate(null); // Reset date when staff changes
                setSelectedTime(null); // Reset time when staff changes
              }}
            >
              <option value="default" disabled>
                Select a staff member
              </option>
              {staffList.map((staff) => (
                <option key={staff.staff_id} value={staff.staff_id}>
                  {staff.name}
                </option>
              ))}
            </select>
          </div>

          {/* Calendar Date Picker */}
          <div className="w-full tablet:w-auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                setSelectedDate(date);
                setSelectedTime(null); // Reset time when date changes
              }}
              minDate={new Date()}
              // maxDate={new Date(new Date().setDate(new Date().getDate() + 30))}
              dateFormat="yyyy-MM-dd"
              className="p-3 border-2 border-gray-300 rounded-md w-full"
              placeholderText="Select a day"
              disabled={!selectedStaff}
            />
          </div>

          {/* Time Selection Dropdown */}
          <div className="w-full tablet:w-auto">
            <select
              name="appointment-slot"
              id="appointment-slot"
              className="p-3 border-2 border-gray-300 rounded-md w-full"
              value={selectedTime || "default"}
              onChange={(e) => setSelectedTime(e.target.value)}
              disabled={!selectedDate}
            >
              <option value="default" disabled>
                Select a slot
              </option>
              {getAvailableSlots().map((slot) => (
                <option
                  key={slot.time}
                  value={slot.time}
                  disabled={!slot.available}
                >
                  {slot.time} {slot.available ? "" : "(Unavailable)"}
                </option>
              ))}
            </select>
          </div>

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
