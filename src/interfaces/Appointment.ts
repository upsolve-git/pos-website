export interface Appointment {
    appointment_id: string; // Unique ID for the appointment
    serviceName: string;
    date: string; // Appointment date (in YYYY-MM-DD format)
    startTime: string; // Appointment start time (in HH:mm format)
    status: "pending" | "confirmed" | "cancelled" | "completed"; // Appointment status
    paymentStatus: "pending" | "paid"; // Payment status
  }
  