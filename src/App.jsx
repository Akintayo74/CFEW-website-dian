import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ResourcesPage from './pages/ResourcesPage';
import DonatePage from './pages/DonatePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPassword';
import AuthLayout from './layouts/AuthLayout';
import ResetPasswordPage from './pages/ResetPassword';
import NewPasswordPage from './pages/NewPassword';
import PasswordResetPage from './pages/AllDone';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Posts from './pages/Posts';
import BlogDetail from './pages/BlogDetail';
import PressRelease from './pages/PressRelease';
import Publication from './pages/Publication';
import UpcomingEvent from './pages/UpcomingEvent';

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Auth routes nested under AuthLayout */}
          <Route path="/admin" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="new-password" element={<NewPasswordPage />} />
            <Route path="password-reset" element={<PasswordResetPage />} />
          </Route>

          {/* Dashboard routes nested under DashboardLayout */}
          <Route path="/admin" element={<DashboardLayout/>}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/categories" element={<Categories />} />
            <Route path="dashboard/posts" element={<Posts />} />
            <Route path="dashboard/posts/press-release" element={<PressRelease />} />
            <Route path="dashboard/posts/publication" element={<Publication />} />
            <Route path="dashboard/posts/upcoming-event" element={<UpcomingEvent />} />
            {/* <Route path="posts" element={<PostsPage />} />
            <Route path="drafts" element={<DraftsPage />} />
            <Route path="settings" element={<SettingsPage />} /> */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;