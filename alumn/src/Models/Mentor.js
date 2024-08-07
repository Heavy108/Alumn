import mongoose from "mongoose";

const Mentors_Schema = new mongoose.Schema({
  Name: {type:String , required:true},
  Alumni_ID: {type:String },
  Email:{type:String , required:true},
  Eligibility: {type:String , required:true},
  Description: {type:String , required:true},
  // image: String,
//   image: { type: Buffer, required: true },
//   Para1 : String,
  // pdfaddress : String,
//   pdf: { type: Buffer, required: true },
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Mentors = mongoose.models.G_Mentor || mongoose.model("G_Mentor", Mentors_Schema);




export default Mentors;
