import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/react.svg';
import avatar from '../assets/user.png'; // Replace with your actual image

export default function DashboardHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Optional: clear session storage, reset state, etc.
    navigate('/');
  };

  return (
    <header className="header-bar">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="header-right">
        <nav className="nav-links">
          <Link to="/keyholders" className="nav-button">Keyholders</Link>
          <Link to="/premium" className="nav-button">Try Premium</Link>
        </nav>

        <div className="avatar-wrapper">
        <img
            src={avatar}
            alt="User"
            className="avatar-img"
            onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDropdownOpen(!dropdownOpen);
            }}
        />

        {dropdownOpen && (
            <div className="signout-dropdown">
            <button onClick={handleSignOut} className="signout-button">
                Sign Out
            </button>
            </div>
        )}
        </div>
      </div>
    </header>
  );
}
