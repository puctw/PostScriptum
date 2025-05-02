import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import '../../styles/signup.css';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login'; // default to login

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-900 px-4">
      <div className="w-full max-w-md space-y-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
          {isSignUp ? 'Create an Account' : 'Log In'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <div className="text-center">
          <Link
            to={`/auth?mode=${isSignUp ? 'login' : 'signup'}`}
            className="text-sm hover:underline mt-4 inline-block"
            style={{ color: 'white' }}
          >
            {isSignUp
              ? 'Already have an account? Log in'
              : "Don't have an account? Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
}
