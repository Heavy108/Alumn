import mongoose from "mongoose";

const Event_Schema = new mongoose.Schema({
  Head: { type: String },
  Name: { type: String },
  Position: { type: String },
  Venue: { type: String },
  tiitle: { type: String },
  description: { type: String },
  time: { type: Date },
  S_image: { type: Buffer  },
  E_image: { type: Buffer  },
  
  // verifyTokenExpiry: Date,
});

const Event = mongoose.models.Event || mongoose.model("Event", Event_Schema);




export default Event;
