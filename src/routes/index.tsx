import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IntroPage } from '../pages/IntroPage';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { FarmerDashboard } from '../features/farmer/FarmerDashboard';
import { LandownerDashboard } from '../features/landowner/LandownerDashboard';
import { SponsorDashboard } from '../features/sponsor/SponsorDashboard';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuthStore } from '../stores/authStore';

function DashboardRouter() {
  const { user } = useAuthStore();

  if (!user) return null;

  switch (user.role) {
    case 'farmer':
      return <FarmerDashboard />;
    case 'landowner':
      return <LandownerDashboard />;
    case 'sponsor':
      return <SponsorDashboard />;
    default:
      return <div>Invalid role</div>;
  }
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
