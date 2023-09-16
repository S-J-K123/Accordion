import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { useRef } from "react";
import picOne from "../assets/img 1.jpg";
import picTwo from "../assets/img-2.jpg";
import picThree from "../assets/img-3.jpg";
import logo from "../assets/logo.png";
import Accordian from "./Accordian";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: { width: "800px", height: "100%" },
    responsive: [
      {
        breakpoint: 863,
        settings: {
          infinite: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider = useRef(null);
  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="container">
      <div className=" section">
        <Slider {...settings} ref={slider}>
          <div>
            <div className="img-1-container">
              <img
                style={imageStyle}
                className="picOne"
                src={picOne}
                alt="pic one"
              />
              <div className="img-btm-1">
                <div className="logo-container">
                  <img className="logo" src={logo} alt="" />
                  <p className="LA">
                    LOSANGELES <br /> MOUNTAINS
                  </p>
                  <div className="nav-container">
                  <Accordian />
                </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="img-2-container">
              <img
                style={imageStyle}
                className="picTwo"
                src={picTwo}
                alt="pic two"
              />
              <div className="img-btm-1">
                <div className="logo-container">
                 <h1 className="logo-2">02. </h1>
                  <p className="climb">
                   climb
                  </p>
                  <p className="p-container"> Lorem ipsum dolor sit amet consecteturcimus suscipit! Reprehenderit architecto dostiae mollitia.</p>
                </div>
               
              </div>
            </div>
          <div>
          <div className="img-1-container">
              <img
                style={imageStyle}
                className="picThree"
                src={picThree}
                alt="pic three"
              />
              <div className="img-btm-2">
                <div className="logo-container-2">
                  <img className="logo" src={logo} alt="" />
                  <p className="LA-2">
                    LOSANGELES <br /> MOUNTAINS
                  </p>
                 <p className="btm-p">COPYRIGHT 2016 ALL RIGHT RESERVED</p>
                </div>
               
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
