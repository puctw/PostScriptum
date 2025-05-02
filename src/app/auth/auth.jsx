import { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import '../../styles/signup.css';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isSignUp = mode === 'signup';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password || (isSignUp && !confirmPassword)) {
      return setError('Please fill in all fields.');
    }

    if (isSignUp && password !== confirmPassword) {
      return setError('Passwords do not match.');
    }

    navigate(`/${username}/dashboard`);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">
          {isSignUp ? 'Create an Account' : 'Log In'}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isSignUp && (
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="auth-button">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <div className="auth-footer">
          <Link to={`/auth?mode=${isSignUp ? 'login' : 'signup'}`} className="auth-toggle-link">
            {isSignUp
              ? 'Already have an account? Log in'
              : "Don't have an account? Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
}
