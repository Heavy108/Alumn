import mongoose from "mongoose";

const Transcript_Schema = new mongoose.Schema({
  Name: {type:String , required:true},
  Roll:{type:String,required:true},
  Alumni_ID: {type:String },
  Email:{type:String , required:true},
  Reason: {type:String , required:true},
 
});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const Script = mongoose.models.S_Transcript || mongoose.model("S_Transcript", Transcript_Schema);




export default Script;
