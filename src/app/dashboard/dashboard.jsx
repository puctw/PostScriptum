// import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import "./dashboard.css";
import lockIcon from "../../assets/lock.svg";
import galleryIcon from "../../assets/gallery.svg";
import folderIcon from "../../assets/folder.svg";
import Header from '../../components/Header_user';

import evernote from "../../assets/evernote.svg";
import img1 from "../../assets/2.jpg";
import img2 from "../../assets/1.jpg";
import img3 from "../../assets/3.jpg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import pdf from "../../assets/pdf.png";
import ppt from "../../assets/ppt.png";
import perfil from "../../assets/perfil.webp";
import amazon from "../../assets/amazon.svg";
import behance from "../../assets/behance.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

export default function Dashboard() {
  // const { username } = useParams();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);
  const prevRef3 = useRef(null);
  const nextRef3 = useRef(null);

  useEffect(() => {
    // This is necessary because the refs are not attached during the first render
  }, []);
  return (
    <>
    <Header />
    <section id="dashboard-section">
      <div className="container">
        <div className="user">
          <img src={perfil} alt="" width={50} height={50} />
          <div className="details">
            <span className="username">Hello, Rui</span>
            <span className="email">orui@mail.com</span>
            <span className="plan">Premium User</span>
          </div>
        </div>
        <div className="account">
          <div className="account-content">
            <div className="lock">
              <img src={lockIcon} alt="" width={50} height={50} />
              <h3 className="title">Accounts</h3>
            </div>

            <a className="pushable">
              <span className="front">Details</span>
            </a>
          </div>
          <div className="custom-navigation">
            <div ref={prevRef2} className="custom-prev">
              <img src={left} alt="" width={50} height={50} />
            </div>
            <div ref={nextRef2} className="custom-next">
              <img src={right} alt="" width={50} height={50} />
            </div>
          </div>
          {/* account swiper */}
          <Swiper
            navigation={{
              prevEl: prevRef2.current,
              nextEl: nextRef2.current,
            }}
            onBeforeInit={(swiper) => {
              // Assign refs during Swiper initialization
              swiper.params.navigation.prevEl = prevRef2.current;
              swiper.params.navigation.nextEl = nextRef2.current;
            }}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2, // screens ≥ 640px
              },
              768: {
                slidesPerView: 3, // screens ≥ 768px
              },
              1024: {
                spaceBetween: 30,

                slidesPerView: 4, // screens ≥ 1024px
              },
            }}
          >
            <SwiperSlide>
              <img src={evernote} alt="" width={50} height={50} />
              <div className="user-info">
                <h3 className="title">Evernote</h3>
                <span className="username">@ruividal</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={amazon} alt="" width={50} height={50} />
              <div className="user-info">
                <h3 className="title">Amazon</h3>
                <span className="username">@ruividal2003</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={behance} alt="" width={50} height={50} />
              <div className="user-info">
                <h3 className="title">Behance</h3>
                <span className="username">@ruiVidal</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={github} alt="" width={50} height={50} />
              <div className="user-info">
                <h3 className="title">GitHub</h3>
                <span className="username">@rui_vidal</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={evernote} alt="" width={50} height={50} />
              <div className="user-info">
                <h3 className="title">Evernote</h3>
                <span className="username">@ruividal</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="gallery">
          <div className="lock">
            <img src={galleryIcon} alt="" width={50} height={50} />
            <h3 className="title">Gallery</h3>
          </div>
          <div className="custom-navigation">
            <div ref={prevRef} className="custom-prev">
              <img src={left} alt="" width={50} height={50} />
            </div>
            <div ref={nextRef} className="custom-next">
              <img src={right} alt="" width={50} height={50} />
            </div>
          </div>
          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Assign refs during Swiper initialization
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            onSwiper={(swiper) =>
              console.log("Swiper initialized with", swiper)
            }
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2, // screens ≥ 640px
              },
              768: {
                slidesPerView: 3, // screens ≥ 768px
              },
              1024: {
                slidesPerView: 3, // screens ≥ 1024px
              },
            }}
          >
            <SwiperSlide>
              <img src={img1} alt="" width={500} height={300} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" width={500} height={300} />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src={img3} alt="" width={500} height={300} />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src={img1} alt="" width={500} height={300} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="files">
        <div className="account-content">
            <div className="lock">
              <img src={folderIcon} alt="" width={50} height={50} />
              <h3 className="title">Files</h3>
            </div>

            <Link to="/files" className="pushable files-btn">
              <span className="front">Details</span>
            </Link>

          </div>
          <div className="custom-navigation">
            <div ref={prevRef3} className="custom-prev">
              <img src={left} alt="" width={50} height={50} />
            </div>
            <div ref={nextRef3} className="custom-next">
              <img src={right} alt="" width={50} height={50} />
            </div>
          </div>
          {/* account swiper */}
          <Swiper
            navigation={{
              prevEl: prevRef3.current,
              nextEl: nextRef3.current,
            }}
            onBeforeInit={(swiper) => {
              // Assign refs during Swiper initialization
              swiper.params.navigation.prevEl = prevRef3.current;
              swiper.params.navigation.nextEl = nextRef3.current;
            }}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2, // screens ≥ 640px
              },
              768: {
                slidesPerView: 3, // screens ≥ 768px
              },
              1024: {
                spaceBetween: 30,

                slidesPerView: 4, // screens ≥ 1024px
              },
            }}
          >
            <SwiperSlide>
              <img src={pdf} alt="" width={50} height={50} />
              <div className="user-info">
              <span className="username">ImportantReport.pdf</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ppt} alt="" width={50} height={50} />
              <div className="user-info">
                <span className="username">Presentation_V2.pptx</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ppt} alt="" width={50} height={50} />
              <div className="user-info">
                <span className="username">Presentation.pptx</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={ppt} alt="" width={50} height={50} />
              <div className="user-info">
                <span className="username">Presentation.pptx</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={pdf} alt="" width={50} height={50} />
              <div className="user-info">
                <span className="username">Presentation.pptx</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}
