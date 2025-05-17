import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom'; // 如果你使用 react-router
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from '@mui/material';
import { Email, Lock, Person } from '@mui/icons-material';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate(); // 路由跳转钩子

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('密码不一致');
      return;
    }

    try {
      await register(email, password);
      alert('注册成功，即将跳转登录页');
      navigate('/login');
    } catch (err: any) {
      alert(err?.response?.data?.message || '注册失败');
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* 内容区撑开并居中 */}
      <div className="flex-grow flex justify-center items-center">
        <Card sx={{ width: 440, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom align="center">
              Register Interview Hub
            </Typography>
  
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
  
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
  
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
  
              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
  
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                color="primary"
              >
                REGISTER
              </Button>
            </form>
  
            <Divider sx={{ my: 2 }}>Account is already available ? </Divider>
  
            <Button fullWidth variant="outlined" color="secondary" href="/login">
              TO LOGIN
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

export default RegisterPage;
