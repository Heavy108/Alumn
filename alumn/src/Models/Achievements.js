import mongoose from "mongoose";

const Achivements_Schema = new mongoose.Schema({
  Name: {type:String , required:true},
  Alumni_ID: {type:String },
  Email:{type:String , required:true},
  Title: {type:String , required:true},
  Description: {type:String , required:true},
  // image: String,
//   image: { type: Buffer, required: true },
//   Para1 : String,
  // pdfaddress : String,
//   pdf: { type: Buffer, required: true },
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Achivements = mongoose.models.G_Achivement || mongoose.model("G_Achivement", Achivements_Schema);




export default Achivements;
