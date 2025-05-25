import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useUserStore } from '../store/user'; // 根据实际路径调整


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      setUser(res.user); // 👈 储存用户信息
      navigate("/questions");
    } catch (err: any) {
      setError(err.response?.data?.message || "登录失败");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* 内容区撑开并居中 */}
      <div className="flex-grow flex justify-center items-center">

      <Card sx={{ width: 400, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Interview Hub
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              required
            />

            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              required
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
              color="primary"
              type="submit"
            >
              LOGIN
            </Button>
            {error && <p style={{ color: "red" }}>错误：{error}</p>}
          </form>

          <Divider sx={{ my: 2 }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            href="/register"
          >
            REGISTER
          </Button>
        </CardContent>
      </Card>
      </div>
 
          {/* 固定在底部的 footer */}
          <footer className="w-full border-t border-gray-200 py-4 px-8 flex justify-between items-center text-sm text-gray-500">
        <div>© 2025 Zihan Luo, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default LoginPage;
