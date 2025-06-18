import mongoose from "mongoose";

const dbConnection = async () => {
  const url = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB connected successfully...!`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
