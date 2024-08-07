import mongoose from "mongoose";

const Opportunity_Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Alumni_ID: { type: String, required: true },
  Email: { type: String, required: true },
  Opportunity_Type: { type: String, required: true },
  Description: { type: String, required: true },
  Attachments: { type: Buffer }
});

const Opp = mongoose.models.G_opportunity || mongoose.model("G_opportunity", Opportunity_Schema);




export default Opp;
