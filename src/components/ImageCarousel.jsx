import React from "react";
import picOne from "../assets/img 1.jpg";
import picTwo from "../assets/img-2.jpg";
import picThree from "../assets/img-3.jpg";
import { useRef } from "react";
import Slider from "react-slick";
import logo from "../assets/logo.png";
import CombinedAccordion from "./CombinedAccordion";

const ImageCarousel = () => {
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
      width: "500px",
      height: "auto",
    };

  return (
    <div className="container">
          <Slider {...settings} ref={slider}>
      <div className="img-container">
        <img className="picOne" style={{ width: "100%" }} src={picOne} alt="img one" />
        <div className="picOne-btm">
<img className="logo-1" src={logo} alt="logo-1" />
<p className="LA-1">LOSANGELES <br /> MOUNTAINS</p>
<CombinedAccordion/>
{/* <nav className="nav">
    <ul>
        <li><a className="history" href="">01. History</a></li>
        <li><a className="team" href="">02. Team</a></li>
    </ul>
</nav> */}

        </div>
      </div>
      <div className="img-container">
        <img className="picTwo" style={{ maxWidth: "100%" }} src={picTwo} alt="img one" />
        <div className="picTwo-btm">
<h3 className="big-num">02 .</h3>
<p className="climb">CLIMB</p>
<p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Assumenda iusto voluptas nequet modi, nulla minus!</p>
        </div>
      </div>
      <div className="img-container">
        <img className="picThree" style={{ maxWidth: "100%" }} src={picThree} alt="img one" />
        <div className="picThree-btm">
<img className="logo-3" src={logo} alt="logo-3" />
<p className="LA">LOSANGELES <br /> MOUNTAINS</p>
<p className="copyright">COPYRIGHT 2016 ALL RIGHT RESERVED</p>
        </div>
      </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
