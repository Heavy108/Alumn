import mongoose from "mongoose";

const Achivements_Schema = new mongoose.Schema({
  Name: String,
  Alumni_id: String,
  Email:String,
  Title: String,
  Description: String,
  // image: String,
//   image: { type: Buffer, required: true },
//   Para1 : String,
  // pdfaddress : String,
//   pdf: { type: Buffer, required: true },
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Achivements = mongoose.models.G_Achivement || mongoose.model("G_Achivement", Achivements_Schema);




export default Achivements;
