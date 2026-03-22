import mongoose from "mongoose";
import logger from "../config/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    logger.info("✅ MongoDB connected");
  } catch (error) {
    logger.error("❌ DB connection failed: " + error.message);

    process.exit(1);
  }
};

export default connectDB;
