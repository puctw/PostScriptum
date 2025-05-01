import { useParams } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const { username } = useParams();

  return (
    <section id="dashboard-section">
      <div className="container">
        <div className="user">
          <img src="" alt="" />
          <div className="details">
            <span className="username">John Doe</span>
            <span className="plan">Base</span>
          </div>
        </div>
        <div className="account">
          <div className="account-content">
            <img src="" alt="" />
            <h3 className="title">Accounts</h3>
            <a href="" className="button-solid">
              Details <img src="" alt="" />
            </a>
          </div>
        </div>
        <div className="gallery">
          <img src="" alt="" />
          <h3 className="title">Gallery</h3>
          {/* swiper code */}
        </div>
      </div>
    </section>
  );
}
