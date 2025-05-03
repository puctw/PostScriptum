import { useState } from 'react';
import '../styles/App.css'; // make sure to update to your actual styles
import Header from '../components/Header_user';
import family from "../assets/family.svg";
import clock from "../assets/clock.svg";
import sbs from "../assets/sbs.jpg"; // assuming this is the correct import
import check from "../assets/check.svg";

export default function Premium() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section id="pricing">
  <div className="container">
    <div className="content">
      <span className="topper">Pricing</span>
      <h2 className="title">It’s Easy to Get Started</h2>
      <p className="text">
        Choose a plan that fits your needs. We offer flexible pricing options to suit everyone.
      </p>
    </div>
    <ul className="card-group">
      <li className="item popular">
        <h3 className="h3">Base plan</h3>
        <p className="item-text">Perfect to get started securing your heritage.</p>
        <div className="option-group">
          <span className="price">750€</span>
        </div>
        <span className="included">Package Includes</span>
        <ul className="ul">
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Image uploading using third party services</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Save account details</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Private file uploading using third party services</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> 1 trusted guardian</li>
        </ul>
        <a href="/basic.html" className="button-solid">Get Started</a>
      </li>

      <li className="item">
        <h3 className="h3">Premium plan</h3>
        <p className="item-text">Your legacy secured with us.</p>
        <div className="option-group">
          <span className="price">1450€</span>
        </div>
        <span className="included">Package Includes</span>
        <ul className="ul">
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Everything in the base plan</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Image uploading hosted by our servers</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> 3 trusted guardians</li>
          <li className="li"><img className="li-img" src={check} alt="" width="20" height="20" /> Private file uploading using our servers</li>
        </ul>
        <a href="/basic.html" className="button-solid">Get Started</a>
      </li>
    </ul>
  </div>
</section>

    </>
  );
}
