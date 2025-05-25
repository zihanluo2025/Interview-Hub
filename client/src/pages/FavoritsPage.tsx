// src/pages/QuestionsPage.tsx
import { useEffect, useState } from "react";
import { fetchQuestions, Question } from "../api/questions"; // ✅ 引入封装的 API
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';




const FavoritsPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question_en: 'What is a closure in JavaScript?',
      question_zh: '什么是 JavaScript 中的闭包？',
      answer_en: 'A closure is a function that has access to its outer function scope even after the outer function has returned.',
      answer_zh: '闭包是指一个函数可以访问其外部函数作用域，即使外部函数已经返回。'
    },
    {
      id: 2,
      question_en: 'Explain the concept of virtual DOM in React.',
      question_zh: '解释 React 中虚拟 DOM 的概念。',
      answer_en: 'The virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize UI rendering.',
      answer_zh: '虚拟 DOM 是真实 DOM 的轻量级 JavaScript 表示，React 用它来优化 UI 渲染。'
    }
  ]);

  const handleDelete = (id:any) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <div className="flex justify-between items-center mb-6">
        <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: 2 }}>
          Add question
        </Button>
      </div> */}

      <div className="grid gap-8">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-white border rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-indigo-700">
                Q{index + 1}. {q.question_en}
              </h2>
              {/* <div className="flex gap-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button onClick={() => handleDelete(q.id)} className="text-red-500 hover:underline">Delete</button>
              </div> */}
            </div>
            <p className="text-gray-500 italic mt-1 mb-4">中文：{q.question_zh}</p>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded">
              <h3 className="font-medium text-gray-800 mb-1">Answer:</h3>
              <p className="text-gray-700 mb-2">{q.answer_en}</p>
              <p className="text-gray-500 italic">中文：{q.answer_zh}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritsPage;