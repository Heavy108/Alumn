import mongoose from "mongoose";

const Gallery_Schema = new mongoose.Schema({
  Caption:{type:String},
  image: { type: Buffer  },
});

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", Gallery_Schema);




export default Gallery;
