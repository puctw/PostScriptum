import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();

  const handleScrollToFaq = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "faq" } });
  };
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "about-us" } });
  };
  const handleScrollToPricing = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "pricing" } });
  };

  return (
    <header className="header-bar">
      <Link to="/" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="header-right">
        <nav className="nav-links">
          <Link to="/" onClick={handleScrollToPricing}  className="nav-button">
            Pricing
          </Link>
          <Link to="/" onClick={handleScrollToAbout}  className="nav-button">
            About Us
          </Link>
          <Link to="/" onClick={handleScrollToFaq} className="nav-button">
            FAQ
          </Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/auth?mode=login" className="login-button">
            Log In
          </Link>
          <Link to="/auth?mode=signup" className="signin-link">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
