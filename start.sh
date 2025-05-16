#!/bin/bash

# 并行运行前后端
echo "🚀 Starting frontend and backend..."

# 在 client 和 server 启动开发服务器
# 如果你用的是 npm，可替换为 npm run dev
(cd client && npm  start) & 
(cd server && npm run dev)

wait
