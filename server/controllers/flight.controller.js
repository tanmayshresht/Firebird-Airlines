import Flight from "../models/Flight.model.js";

export const getFlights = async (req, res) => {
  try {
    const { from, to } = req.query;
    let query = {};

    if (from) query.from = { $regex: from, $options: "i" };
    if (to) query.to = { $regex: to, $options: "i" };

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addFlight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.status(201).json({ message: "Flight added successfully", flight: newFlight });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};