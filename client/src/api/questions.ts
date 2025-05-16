// src/api/questions.ts
import api from "./index";

// 类型定义
export type Question = {
  id: number;
  question: string;
};

// 封装的获取题目列表 API
export async function fetchQuestions(): Promise<Question[]> {
  const res = await api.get<Question[]>("/questions");
  console.log(res.data,"res.data");
  
  return res.data;
}
