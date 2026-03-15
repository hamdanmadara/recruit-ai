import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Positions from './pages/Positions';
import CreatePosition from './pages/CreatePosition';
import Candidates from './pages/Candidates';
import Shortlisted from './pages/Shortlisted';
import AIChat from './pages/AIChat';
import ResumeDetail from './pages/ResumeDetail';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/positions/create" element={<CreatePosition />} />
          <Route path="/positions/:positionId/candidates" element={<Candidates />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/resume/:id" element={<ResumeDetail />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  );
}
