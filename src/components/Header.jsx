import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../assets/react.svg';

export default function Header() {
  return (
    <header className="header-bar">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="header-right">
        <nav className="nav-links">
          <Link to="/pricing" className="nav-button">Pricing</Link>
          <Link to="/reviews" className="nav-button">Reviews</Link>
          <Link to="/about" className="nav-button">About Us</Link>
          <Link to="/contacts" className="nav-button">Contacts</Link>
          <Link to="/faq" className="nav-button">FAQ</Link>
        </nav>

        <div className="auth-buttons">
        <Link to="/auth?mode=login" className="login-button">Log In</Link>
        <Link to="/auth?mode=signup" className="signin-link">Sign In</Link>
        </div>
      </div>
    </header>
  );
}
