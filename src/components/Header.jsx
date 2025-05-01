import { Link } from 'react-router-dom';
import '../styles/Header.css'; 
import logo from '../assets/react.svg';

export default function Header() {
  return (
    <header className="header-bar">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <nav className="nav-links">
        <Link to="/about" className="nav-button">About Us</Link>
        <Link to="/contacts" className="nav-button">Contacts</Link>
        <Link to="/faq" className="nav-button">FAQ</Link>
      </nav>

      <div className="user-avatar"></div>
    </header>
  );
}
