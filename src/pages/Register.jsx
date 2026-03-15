import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Rocket } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import GoogleIcon from '../components/ui/GoogleIcon';

const features = [
  { icon: <Sparkles size={18} />, text: 'Free plan: 100 resumes, 50 queries/mo' },
  { icon: <Lock size={18} />, text: 'Enterprise-grade security & encryption' },
  { icon: <Rocket size={18} />, text: 'Set up in under 2 minutes' },
];

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      tagline="Start hiring in minutes."
      description="Create your free account and upload your first batch of resumes. No credit card required."
      features={features}
    >
      <h2 className="auth-form-title">Create your account</h2>
      <p className="auth-form-sub">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>

      <form onSubmit={handleRegister}>
        <div className="form-row">
          <Input label="First Name" placeholder="Emily" />
          <Input label="Last Name" placeholder="Morgan" />
        </div>
        <Input label="Company Name" placeholder="Acme Corp" />
        <Input label="Work Email" type="email" placeholder="emily@acmecorp.com" />
        <Input label="Password" type="password" placeholder="Min 8 characters" />

        <div className="form-checkbox-row">
          <label>
            <input type="checkbox" /> I agree to the <a href="#">Terms</a> and{' '}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <Button variant="primary" size="lg" fullWidth type="submit">
          Create Account
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
