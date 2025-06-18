import { application } from "express";
import mongoose, { mongo } from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "",
    default: "",
  },
});

const Jobs = mongoose.model("job", jobSchema);

export default Jobs;
