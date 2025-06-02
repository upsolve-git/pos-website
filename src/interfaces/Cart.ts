export interface Cart {
    cart_id: number; // Unique ID for the appointment
    serviceName: string;
    date: string; // Appointment date (in YYYY-MM-DD format)
    startTime: string; // Appointment start time (in HH:mm format)
}