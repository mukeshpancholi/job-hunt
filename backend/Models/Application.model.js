import { application } from "express";
import mongoose, { mongo } from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pendding  ", "accepted", "rejected"],
      default: "pendding",
    },
  },
  { timestamps: true }
);

const JobApplication = mongoose.model("jobapplication", applicationSchema);

export default JobApplication;
