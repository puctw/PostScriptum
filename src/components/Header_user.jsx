import { useState } from 'react';
import { useAuth } from "../app/context/authContext/index.jsx";

import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import avatar from '../assets/user.png'; // Replace with your actual image

export default function DashboardHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { signOutUser } = useAuth();
  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/auth"); // Redirect to login after signing out
    } catch (err) {
      console.error("Sign out failed", err);
    }
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

        {/* Single avatar block with dropdown */}
        <div className="avatar-wrapper">
          <img
            src={avatar}
            alt="User"
            className="avatar-img cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
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