import mongoose from "mongoose";

const FeedBack_Schema = new mongoose.Schema({
  name: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  email: { type: String, required: true },
  eventOrganization: { type: String, required: true },
  venueAndFacilities: { type: String, required: true },
  agendaActivities: { type: String, required: true },
  networkingOpportunities: { type: String, required: true },
  qualityOfFood: { type: String, required: true },
  favoritePart: { type: String, default: null },
  activitiesImprovement: { type: String, default: null },
  attendFuture: { type: String, required: true },
  suggestions: { type: String, default: null },
  otherFeedback: { type: String, default: null },
});

const AlumniFeedback =
  mongoose.models.Feedback_alumni ||
  mongoose.model("Feedback_alumni", FeedBack_Schema);

export default AlumniFeedback;
