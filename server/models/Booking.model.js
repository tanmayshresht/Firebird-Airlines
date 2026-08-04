import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    flightNo: { type: String, required: true },
    route: { type: String, required: true },
    price: { type: String, required: true },
    passengerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    passport: { type: String, required: true },
    seat: { type: String, default: "14A" },
    status: { type: String, default: "Confirmed" },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);