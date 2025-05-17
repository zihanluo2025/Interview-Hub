import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    questionEn: { type: String, required: true },
    questionZh: { type: String },
    answerEn: { type: String },
    answerZh: { type: String },
  },
  { timestamps: true } // 会生成 createdAt 和 updatedAt 字段
);

const Question = mongoose.model('Question', questionSchema);

export default Question;
