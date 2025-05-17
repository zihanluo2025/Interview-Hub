import api from "./index";

export interface User {
  email: string;
  role: string;
}

export async function login(
  email: string,
  password: string
): Promise<{ user: User }> {
  const res = await api.post(
    "/auth/login",
    { email, password },
    { withCredentials: true }
  );

  return res.data; // 👈 确保返回 data，data 里面包含 user 字段
}





export async function register(email: string, password: string): Promise<void> {
  await api.post(
    "/auth/register",
    { email, password },
    { withCredentials: true }
  );
}


export async function logout(): Promise<void> {
  await api.post(
    "/auth/logout",
    { withCredentials: true }
  );
}




