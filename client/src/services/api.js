import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach authorization token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth endpoints
export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);

// Flight endpoints
export const fetchFlights = (params) => API.get("/flights", { params });

// Booking endpoints
export const createBooking = (bookingData) => API.post("/bookings/create", bookingData);
export const fetchUserBookings = (userId) => API.get(`/bookings/user/${userId}`);

export default API;