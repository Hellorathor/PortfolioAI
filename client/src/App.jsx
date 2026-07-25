import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

import Dashboard from "./pages/dashboard/Dashboard";
import Portfolio from "./pages/portfolio/Portfolio";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import Projects from "./pages/projects/Projects";
import AI from "./pages/ai/AI";
import ProfilePage from "./pages/profile/ProfilePage";
import Templates from "./pages/templates/Templates";
// import Analytics from "./pages/analytics/Analytics";

import ProtectedRoute from "./components/common/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Forgot Password */}
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Reset Password */}
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        <Route path="/portfolio" element={<Portfolio />} />

        {/* Public Portfolio */}
        <Route
          path="/portfolio/:slug"
          element={<PortfolioPage />}
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/ai"
            element={<AI />}
          />

          <Route
            path="/templates"
            element={<Templates />}
          />

          {/* <Route
            path="/analytics"
            element={<Analytics />}
          /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;