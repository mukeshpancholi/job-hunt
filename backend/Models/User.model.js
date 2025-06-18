import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      default: "student",
    },
    profile: {
      bio: {
        type: String,
      },

      skill: [
        {
          type: String,
        },
      ],

      resume: {
        type: String,
      },
      resumeorigenalname: {
        type: String,
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timeseries: true }
);

const User = mongoose.model("user", userSchema);

export default User;
