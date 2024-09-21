import mongoose from "mongoose";

const admin_Schema = new mongoose.Schema({
  name: {type:String },
 
  password:{type:String},
 
  

});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const admin = mongoose.models.admin || mongoose.model("admin", admin_Schema);




export default admin;
