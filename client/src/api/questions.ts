// src/api/questions.ts
import api from "./index";

// 类型定义
export type Question = {
  _id: string;
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
};

// 封装的获取题目列表 API
export async function fetchQuestions(): Promise<Question[]> {
  const res = await api.get<Question[]>("/questions");
  console.log(res.data,"res.data");
  
  return res.data;
}

export async function createQuestion(data: {
  questionEn: string;
  questionZh?: string;
  answerEn?: string;
  answerZh?: string;
}) {
  const res = await api.post('/questions/add', data);
  return res.data;
}

export async function updateQuestion(id: string, data: any) {
  const res = await api.put(`/questions/edit/${id}`, data, {
    withCredentials: true,
  });
  return res.data;
}


export async function deleteQuestion(id: string) {
  const res = await api.delete<{ message: string }>(`/questions/delete/${id}`, {
    withCredentials: true,
  });
  return res.data;
}
