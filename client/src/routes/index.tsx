import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionsPage from "../pages/QuestionsPage";
import LoginPage from "../pages/LoginPage";


import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/Mainlayout"
import JobListPage from "../pages/JobListPage"
import ProfilePage from "../pages/ProfilePage"

export default function Router() {
  return (
    <BrowserRouter>
<Routes>
  {/* no sisebar */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />

  <Route path="/" element={<MainLayout />}>
    <Route path="questions" element={<QuestionsPage />} />
    <Route path="questions/:category" element={<QuestionsPage />} />
    <Route path="jobs" element={<JobListPage />} />
    <Route path="profile" element={<ProfilePage />} />
    <Route index element={<QuestionsPage />} /> {/* redirect */}
  </Route>
</Routes>
    </BrowserRouter>
  );
}




