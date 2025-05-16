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



export default router;
