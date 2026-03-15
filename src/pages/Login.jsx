import { Link, useNavigate } from 'react-router-dom';
import { FileText, Bot, Zap } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import GoogleIcon from '../components/ui/GoogleIcon';

const features = [
  { icon: <FileText size={18} />, text: 'Bulk upload & parse resumes instantly' },
  { icon: <Bot size={18} />, text: 'AI chatbot finds best-match candidates' },
  { icon: <Zap size={18} />, text: 'Reduce screening time by 70%' },
];

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      tagline="Hire smarter. Not harder."
      description="Upload resumes, build your talent bank, and let AI find the perfect candidates through natural conversation."
      features={features}
    >
      <h2 className="auth-form-title">Welcome back</h2>
      <p className="auth-form-sub">
        Don&apos;t have an account? <Link to="/register">Sign up free</Link>
      </p>

      <form onSubmit={handleLogin}>
        <Input label="Email" type="email" placeholder="you@company.com" />
        <Input label="Password" type="password" placeholder="........" />

        <div className="form-checkbox-row">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <Button variant="primary" size="lg" fullWidth type="submit">
          Sign In
        </Button>
      </form>

      <div className="auth-divider">or continue with</div>

      <button className="btn-google" type="button" onClick={() => navigate('/dashboard')}>
        <GoogleIcon />
        Continue with Google
      </button>
    </AuthLayout>
  );
}
