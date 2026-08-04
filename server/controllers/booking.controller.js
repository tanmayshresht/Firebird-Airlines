import Booking from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, flightNo, route, price, passengerName, email, phone, passport } = req.body;

    const newBooking = await Booking.create({
      userId,
      flightNo,
      route,
      price,
      passengerName,
      email,
      phone,
      passport,
    });

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ userId });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};