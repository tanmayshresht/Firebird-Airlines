import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flightNo: { type: String, required: true },
    airline: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    class: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Flight", flightSchema);