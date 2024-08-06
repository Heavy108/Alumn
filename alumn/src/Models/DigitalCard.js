import mongoose from "mongoose";

const DigitalCard_Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Alumni_ID: { type: String, required: true },
  Roll: { type: String, required: true },
  Email: { type: String, required: true },
  Programme: { type: String, required: true },
  Passout_Year: { type: Number, required: true },
  Linkedin_Profile: { type: String, required: true },
  Profile: { type: Buffer, required: true  }
});

const Card = mongoose.models.S_Card || mongoose.model("S_Card", DigitalCard_Schema);




export default Card;
