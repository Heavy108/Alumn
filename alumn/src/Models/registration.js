import mongoose from "mongoose";

const RegistrationFormSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // 10-digit mobile number validation
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  department: { type: String, required: true },
  programme: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  currentStatus: {
    type: String,
    required: true,
    enum: ["Employed", "Not Employed", "Entrepreneur"],
  },
  organisation: { type: String }, // Optional, based on current status
  designation: { type: String }, // Optional, based on current status
  companyEmail: { type: String, match: /\S+@\S+\.\S+/ }, // Optional, validate if present
  personalEmail: { type: String, required: true, match: /\S+@\S+\.\S+/ },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  whatsapp: { type: String, match: /^[0-9]{10}$/ }, // Optional
  accommodation: { type: String, required: true, enum: ["Yes", "No"] },
  withFamily: { type: String, required: true, enum: ["Yes", "No"] },
  numberOfPersons: { type: Number }, // Optional, based on `withFamily`
  foodPreference: { type: String, enum: ["Vegetarian", "Non-Vegetarian"] },
  registrationFee: { type: String }, // Computed on frontend, optional in the schema
  paymentScreenshot: { type: String, required: true }, // Storing file URL or path
  transactionRef: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  
});

const RegistrationForm =
  mongoose.models.RegistrationForm ||
  mongoose.model("RegistrationForm", RegistrationFormSchema);

export default RegistrationForm;

