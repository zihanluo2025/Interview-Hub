// src/pages/QuestionsPage.tsx
import { useEffect, useState } from "react";
import { fetchQuestions, Question } from "../api/questions"; // ✅ 引入封装的 API
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Rating
  
} from '@mui/material';




export default function ProfilePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const value = 4



  useEffect( () => {
    // fetchQuestions()
    //   .then(setQuestions)
    //   .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <div className="bg-green-500 text-white p-4">✅ Tailwind OK</div>

      <Rating name="read-only" value={value} readOnly />


      <Button className="bg-green-500 text-white">Test</Button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {/* {questions && questions.map((q) => (
          <li key={q.id}>{q.question}</li>
        ))} */}
      </ul>
    </div>
  );
}
