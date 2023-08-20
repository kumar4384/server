import mongoose, { Schema } from "mongoose";

const schoolSchema = new Schema({
  udiseNo: {
    type: String,
  },
  schoolType: {
    type: String,
  },
  schoolName: {
    type: String,
  },
  district: {
    type: String,
  },
  educationalDistrict: {
    type: String,
  },
  headmasterName: {
    type: String,
  },
  headmasterRetirementDate: {
    type: String,
  },
  headmasterMobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  studentsStrength: {
    type: String,
  },
  teachersStrength: {
    type: String,
  },
  clericalStrength: {
    type: String,
  },
  lastAuditingPeriod: {
    type: String,
  },
  lastAuditingDate: {
    type: String,
  },
});

export default mongoose.model("School", schoolSchema);
