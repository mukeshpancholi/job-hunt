import mongoose from "mongoose";

const dbConnection = async () => {
  const url = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(url, {
      dbname: "jobhunt",
    });
    if (!conn) {
      console.error("MongoDB connection failed: No connection object returned");
      process.exit(1);
    }
    console.log(`MongoDB connected successfully...!`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
