import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/interview_hub";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    // process.exit(1);
  }
};
