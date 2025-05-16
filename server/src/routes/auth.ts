import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";


const router = Router();


const JWT_SECRET = "your_jwt_secret"; // 可以从 .env 中读取

// 注册接口
router.post("/register", async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "该邮箱已注册" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: passwordHash }); // ✅ 修复字段名
    await newUser.save();

    return res.status(201).json({ message: "注册成功" });
  } catch (err: any) {
    console.error("❌ 注册错误：", err);
    return res.status(500).json({ message: "服务器内部错误" });
  }
});


/**
 * ✅ 登录接口
 * 设置 httpOnly 的 cookie 存放 token
 */
router.post("/login", async (req:any, res:any) => {
  const { email, password } = req.body;

  // 用 findOne 查数据库中的用户
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "邮箱错误" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "密码错误" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
    expiresIn: "2h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 2 * 60 * 60 * 1000,
  });

  return res.json({ message: "登录成功" });
});


router.post('/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: '已退出登录' });
});




export default router;
