import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Question", QuestionSchema);
