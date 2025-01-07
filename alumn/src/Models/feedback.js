import mongoose from "mongoose";

const FeedBack_Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Food: { type: String, required: true },
  Rating:{type:Number,required:true},
  Comment:{type:String}
});

const Feedback =
  mongoose.models.Feedback_D || mongoose.model("Feedback_D", FeedBack_Schema);




export default Feedback;
