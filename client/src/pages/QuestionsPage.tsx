// src/pages/QuestionsPage.tsx
import React, { useEffect, useState } from "react";
import {
  fetchQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  Question,
} from "../api/questions";
import {  IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import QuestionFormDialog from "./AddQuestion";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


import { Fab } from '@mui/material';


const QuestionRecordsPage = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<Question | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const res = await fetchQuestions();
        if (res) {
          setQuestions(res);
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    loadQuestions();
  }, []);

  const handleCreate = async (data: {
    questionEn: string;
    questionZh?: string;
    answerEn?: string;
    answerZh?: string;
  }) => {
    try {
      const res = await createQuestion(data);
      if (res?.question) {
        setOpen(false);
        setQuestions(prev => [res.question, ...prev]);
      }
    } catch (error) {
      console.error("创建失败:", error);
    }
  };

  const handleEdit = (q: Question) => {
    setSelectedData(q);
    setEditOpen(true);
  };

  const [showChinese, setShowChinese] = useState(false); // 控制中文显示状态


  

  const handleUpdate = async (data: {
    questionEn: string;
    questionZh?: string;
    answerEn?: string;
    answerZh?: string;

  }) => {
    if (!selectedData?._id) return;
 
    try {
      await updateQuestion(selectedData._id, data);
      setEditOpen(false);
      setQuestions(prev =>
        prev.map(q => (q._id === selectedData._id ? { ...q, ...data } : q))
      );
    } catch (error) {
      console.error("更新失败:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteQuestion(id);
      setQuestions(prev => prev.filter(q => q._id !== id));
    } catch (error) {
      console.error("删除失败:", error);
    }
  };

  return (
<div className="flex flex-col min-h-screen">
  {/* Top Fixed Bar */}
  {/* <div className="sticky top-0 z-20 bg-white shadow-md bg-gray-50">
    <div className="px-4 py-3">
      <Button variant="contained">ADD QUESTION</Button>
    </div>
  </div> */}


      {/* <div className="flex justify-between items-center mb-6">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2 }}
          onClick={() => setOpen(true)}
        >
          Add question
        </Button>
      </div> */}
      <Fab
      color="primary"
      aria-label="add" size="small" 
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 52,
        zIndex: 30,
      }}
      onClick={() => setOpen(true)}
    >
   
      
      <AddIcon />
    </Fab>
       
  
<div className="grid gap-8">
        {questions.map((q, index) => (
          <div
            key={q._id}
            className={`${
              index % 2 === 0 ? "!bg-white" : "!bg-gray-50"
            } border rounded-lg shadow p-6`}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-indigo-700">
                Q{index + 1}. {q.questionEn}
              </h2>
              <div className="flex gap-2">


                {showChinese && <IconButton
                  aria-label="VisibilityOff"
                  onClick={() => setShowChinese(prev => !prev)}
                >
                  <VisibilityOffIcon />
                </IconButton>} 

                {!showChinese &&  <IconButton
                  aria-label="Visibility"
                  onClick={() => setShowChinese(prev => !prev)}
                >
                  <VisibilityIcon />
                </IconButton>} 


                
                <IconButton
                  aria-label="Edit"
                  onClick={() => handleEdit(q)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(q._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            {showChinese && <p className="text-gray-500 italic mb-2">中文：{q.questionZh}</p>}
            <div className="bg-gray-50 border border-gray-200 p-4 rounded">
              <h3 className="font-blod text-gray-800 mb-1">Answer :</h3>
              <p className="text-gray-700 mb-2">{q.answerEn}</p>
              {showChinese && <p className="text-gray-500 italic">中文：{q.answerZh}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* 新增弹窗 */}
      <QuestionFormDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreate}
        mode="add"
      />

      {/* 编辑弹窗 */}
      <QuestionFormDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSubmit={handleUpdate}
        mode="edit"
        initialData={selectedData || undefined}
      />
    </div>
  );
};

export default QuestionRecordsPage;
