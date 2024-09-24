import mongoose from "mongoose";

const Event_Schema = new mongoose.Schema({
  Head: { type: String, required: true },
  Name: { type: String, required: true },
  Position: { type: String, required: true },
  Venue: { type: String, required: true },
  Title: { type: String, required: true },
  description: { type: String },
  time: { type: Date, required: true },
  S_image: { type: Buffer, required: true  },
  E_image: { type: Buffer, required: true  },
  
  // verifyTokenExpiry: Date,
});

const Event = mongoose.models.Event || mongoose.model("Event", Event_Schema);




export default Event;
