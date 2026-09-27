import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/common/Toast';
import FormField from '../components/common/FormField';
import { UtensilsCrossed, Lock } from 'lucide-react';

export const Login = () => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnPath = searchParams.get('returnPath') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const loggedUser = await login(email, password);
      showToast('Login successful!', 'success');
      if (loggedUser.mustChangePassword) {
        navigate('/change-password');
      } else {
        navigate(decodeURIComponent(returnPath));
      }
    } catch (err) {
      const errMsg = err.response?.data?.error?.message || 'Invalid email or password';
      setError(errMsg);
      showToast(errMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800">
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-900/10">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome Back to Savoria</h2>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">Enter your credentials to access your account</p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 text-xs font-medium">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <FormField label="Email Address" id="login-email" required>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </FormField>

          <FormField label="Password" id="login-password" required>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </FormField>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50 min-h-touch flex items-center justify-center space-x-2"
          >
            <Lock className="w-4 h-4" />
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          New to Savoria?{' '}
          <Link to="/register" className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
