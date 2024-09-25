import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the blog post'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for the blog post'],
  },
  summary:{type:String},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
