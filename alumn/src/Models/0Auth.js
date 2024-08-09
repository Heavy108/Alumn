import mongoose from "mongoose";

const OAuth_Schema = new mongoose.Schema({
  name: {type:String },
 
  email:{type:String},
  image:{
    type:String
  }
  

});

// const Magazine = mongoose.models.Magazine ? mongoose.model.Magazine : mongoose.model("Magazine", MagazineSchema);
const User = mongoose.models.credential || mongoose.model("credential", OAuth_Schema);




export default User;
