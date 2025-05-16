// src/pages/QuestionsPage.tsx
import { useEffect, useState } from "react";
import { fetchQuestions, Question } from "../api/questions"; // ✅ 引入封装的 API


export default function ProfilePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);



  useEffect( () => {
    fetchQuestions()
      .then(setQuestions)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}
