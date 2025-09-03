import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    questionEn: { type: String, required: true },
    questionZh: { type: String },
    answerEn: { type: String },
    answerZh: { type: String },
  },
  { timestamps: true } 
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
