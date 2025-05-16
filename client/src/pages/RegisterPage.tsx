import React, { useState } from 'react';
import { register } from '../api/ auth';
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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Card sx={{ width: 440, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            注册 Interview Hub
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="用户名"
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
              label="邮箱"
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
              label="密码"
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
              label="确认密码"
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
              注册
            </Button>
          </form>

          <Divider sx={{ my: 2 }}>已经有账号？</Divider>

          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            href="/login"
          >
            去登录
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
