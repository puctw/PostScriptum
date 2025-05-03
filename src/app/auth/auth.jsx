import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import "../../styles/signup.css";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth.jsx";
import { useAuth } from "../context/authContext/index.jsx";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";

  const [isSigningIn, setIsSigningIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isSignUp = mode === "signup";

  const { userLoggedIn } = useAuth();
  useEffect(() => {
    if (userLoggedIn) {
      navigate("/dashboard");
    }
  }, [userLoggedIn, navigate]); // ← Always include navigate in deps


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }

    navigate(`/dashboard`);
  };
  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle()
        .then(() => {
          navigate("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">
          {isSignUp ? "Create an Account" : "Log In"}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button onClick={onGoogleSignIn} className=" google">
              Sign in with Google
            </button>
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
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="auth-footer">
          <Link
            to={`/auth?mode=${isSignUp ? "login" : "signup"}`}
            className="auth-toggle-link"
          >
            {isSignUp
              ? "Already have an account? Log in"
              : "Don't have an account? Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
}
