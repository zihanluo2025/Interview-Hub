import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// ✅ 定义带 user 的 Request 类型
export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
  };
}

const JWT_SECRET = "your_jwt_secret";

// ✅ 修复后的中间件（不写死类型）
export const requireAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "未登录" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.user = { id: decoded.userId };
    next(); // ✅ 记得调用
  } catch {
    res.status(401).json({ message: "Token 无效" });
  }
};
