import mongoose from "mongoose";

const G_payback_Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Alumni_ID: { type: String, required: true },
  Email: { type: String, required: true },
  Transaction_id: { type: String, required: true },
  Attachments: { type: Buffer }
});

const Donation = mongoose.models.G_payback || mongoose.model("G_payback", G_payback_Schema);




export default Donation;
