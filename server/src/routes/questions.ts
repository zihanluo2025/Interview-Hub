import { Router, Request, Response } from "express";
import { requireAuth, AuthenticatedRequest } from "../middleware/auth";


import Question from "../models/Question";



const router = Router();

// 获取所有题目
router.get("/", requireAuth, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "数据库查询失败" });
  }
});

// POST 新增问题
router.post("/add", requireAuth, async (req: AuthenticatedRequest, res: any) => {
  try {
    const { questionEn, questionZh, answerEn, answerZh } = req.body;

    if (!questionEn || questionEn.trim() === "") {
      return res.status(400).json({ message: "英文问题是必填项" });
    }
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "未登录用户无法添加问题" });
    }

    const newQuestion = new Question({
      questionEn,
      questionZh,
      answerEn,
      answerZh,
      createdBy: userId,  
    });

    const saved = await newQuestion.save();
    res.status(201).json({ message: "新增问题成功", question: saved });
  } catch (err) {
    console.error("新增问题失败:", err);
    res.status(500).json({ message: "服务器错误，新增失败" });
  }
});


// 编辑题目
router.put("/edit/:id", requireAuth, async (req: AuthenticatedRequest, res: any) => {
  try {
    const { id } = req.params;
    const { questionEn, questionZh, answerEn, answerZh } = req.body;

    if (!questionEn || questionEn.trim() === "") {
      return res.status(400).json({ message: "英文问题是必填项" });
    }

    const updated = await Question.findByIdAndUpdate(
      id,
      { questionEn, questionZh, answerEn, answerZh },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "题目未找到" });
    }

    res.json({ message: "更新成功", question: updated });
  } catch (err) {
    console.error("更新题目失败:", err);
    res.status(500).json({ message: "服务器错误，更新失败" });
  }
});

// 删除题目
router.delete("/delete/:id", requireAuth, async (req: AuthenticatedRequest, res: any) => {
  try {
    const { id } = req.params;

    const deleted = await Question.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "题目未找到" });
    }

    res.json({ message: "删除成功", question: deleted });
  } catch (err) {
    console.error("删除题目失败:", err);
    res.status(500).json({ message: "服务器错误，删除失败" });
  }
});





export default router;
