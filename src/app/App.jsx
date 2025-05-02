import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.css";
import Header from "../components/Header";
import sbs from "../assets/sbs.jpg";
import check from "../assets/check.svg";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const faqData = [
    {
      question: "What is Post Scriptum?",
      answer:
        "Post Scriptum is a platform to manage your digital legacy, allowing you to prepare messages and manage accounts after your passing.",
    },
    {
      question: "How does it work?",
      answer:
        "You create a personal plan within the app by uploading media, writing messages, and choosing recipients. You can also link your online accounts. In the event of your death, our verification process is triggered, and your instructions are carried out exactly as you’ve planned.",
    },
    {
      question: "How secure is it?",
      answer:
        "Your data is encrypted, stored securely, and only released under strict verification protocols. We prioritize privacy and use the highest standards of data protection.",
    },
    {
      question: "What happens if I change my mind?",
      answer:
        "You can edit, update, or delete your legacy plan at any time through your account dashboard.",
    },
    {
      question: "Who can access my information after I’m gone?",
      answer:
        "    Only the people you’ve selected will receive your messages or data. No one else can access your information unless you’ve explicitly allowed it.",
    },

    {
      question: "Why should I use Post Scriptum?",
      answer:
        "Because your story matters. Post Scriptum ensures your voice is heard, your wishes are respected, and your digital life is handled with care—on your terms.",
    },
  ];
  return (
    <>
      <Header />
      <div id="root">
        <section id="hero-82">
          <div class="cs-container">
            <h1 class="cs-title">
              Your digital legacy
              <br /> is safe with us.
            </h1>
            <p class="cs-text">
              Post Scriptum is a platform to manage your digital legacy,
              allowing you to prepare messages and manage accounts after your
              passing.
            </p>
          </div>
        </section>

        <section id="about-us">
          <div className="container">
            <picture className="picture">
              <source media="(max-width: 600px)" srcSet={sbs} />
              <source media="(min-width: 601px)" srcSet={sbs} />
              <img
                loading="lazy"
                decoding="async"
                src={sbs}
                alt="room"
                width="618"
                height="537"
              />
            </picture>
            <div className="content">
              <span className="topper">Who We Are</span>
              <h2 className="title">We are Ctrl Alt Tuga</h2>
              <p className="text">
                We are a team of software engineers from the University of
                Coimbra, and we created Post Scriptum with a clear purpose: to
                help people take control of their digital legacy. In today’s
                digital world, our online presence often outlives us. Post
                Scriptum allows individuals to prepare thoughtful messages,
                preserve meaningful photos and videos, and manage digital
                accounts to be handled after their passing. Whether it’s sending
                a final note to a loved one or ensuring private memories are
                passed on with care, our platform makes it possible.{" "}
              </p>
              <p className="text">
                Post Scriptum is built on the belief that technology should
                serve humanity, even at the most sensitive moments. With
                security, dignity, and peace of mind at the core, we empower
                people to leave behind more than memories: they leave meaning.
              </p>
              <a href="#" className="button-solid">
                Get Free Quote
              </a>
            </div>
          </div>
        </section>

        <section id="faq">
          <div class="container">
            <div class="content">
              <span class="topper">FAQ</span>
              <h2 class="title">
                If Your Question Is Not Here{" "}
                <span class="color">Contact Us</span>
              </h2>
              <p class="text">
                We are here to help you with any questions or concerns you may
                have. Our team is dedicated to providing you with the support
                you need.
              </p>
            </div>
            <ul className="faq-group">
              {faqData.map((item, index) => (
                <li
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <button className="button">
                    <span className="button-text">{item.question}</span>
                  </button>
                  <p className="item-p">{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing">
          <div class="container">
            <div class="content">
              <span class="topper">Pricing</span>
              <h2 class="title">It’s Easy to Get Started</h2>
              <p class="text">
                Choose a plan that fits your needs. We offer flexible pricing
                options to suit everyone.
              </p>
            </div>
            <ul class="card-group">
              <li class="item popular">
                <h3 class="h3">Base plan</h3>
                <p class="item-text">
                  Perfect to get started securing your heritage.
                </p>
                <div class="option-group">
                  <span class="price">750€</span>
                </div>
                <span class="included">Package Includes</span>
                <ul class="ul">
                  <li class="li">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Image uploading using third party services
                  </li>
                  <li class="li">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Save account details
                  </li>

                  <li class="li ">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Private file uploading using third party services
                  </li>
                  <li class="li ">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    1 trusted guardian
                  </li>
                </ul>
                <a href="/basic.html" class="button-solid">
                  Get Started
                </a>
              </li>
              <li class="item">
                <h3 class="h3">Premium plan</h3>
                <p class="item-text"> Your legacy secured with us.</p>
                <div class="option-group">
                  <span class="price">1450€</span>
                </div>
                <span class="included">Package Includes</span>
                <ul class="ul">
                  <li class="li ">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Everything in the base plan
                  </li>
                  <li class="li">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Image uploading hosted by our servers
                  </li>
                  <li class="li">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    3 trusted guardians
                  </li>

                  <li class="li ">
                    <img
                      class="li-img"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      src={check}
                      alt="code stitch icon"
                      width="20"
                      height="20"
                    />
                    Private file uploading using our servers
                  </li>
                </ul>
                <a href="/basic.html" class="button-solid">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
