import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user-route.js";

dotenv.config();

const PORT = process.env.PORT || 4500;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true, // Replace with your frontend URL
    credentials: true,
  })
);
app.use(cookieParser());

dbConnection();
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
