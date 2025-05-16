import api from "./index";

export async function login(email: string, password: string): Promise<void> {
  await api.post(
    "/auth/login",
    { email, password },
    { withCredentials: true }
  );
}


export async function register(email: string, password: string): Promise<void> {
  await api.post(
    "/auth/register",
    { email, password },
    { withCredentials: true }
  );
}



