import mongoose from "mongoose";

const Alumni_Schema = new mongoose.Schema({
  Name: { type: String},
  Roll_Number: { type: String },
  Email: { type: String},
  Phone: { type: Number},
  Program_ID: { type: String},
  Year: { type: Number},
});

const Alumni_det =
  mongoose.models.alumni_detail ||
  mongoose.model("alumni_detail", Alumni_Schema);

export default Alumni_det;
