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

        <div className="relative">
          <img
            src={avatar}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-50">
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
