import React from "react";
import Slider from "react-slick";
import "./Home.css";

import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import F from "../assets/f.jpg";
import Fa from "../assets/ff.jpg";
import Fab from "../assets/fff.jpg";

const slides = [
  {
    image: Slide1,
    bigText: "Get Your Dream Car Today",
    smallText:
      "Imagine yourself behind the wheel of a brand-new 2025 BYD e7, gliding silently through the streets.",
    buttonText: "Reach Us Today",
    whatsappLink: "https://wa.me/+2349117148123",
  },
  {
    image: Slide2,
    bigText: "Luxury Cars At Your Fingertips",
    smallText:
      "Browse premium cars, compare models, and get the best deals instantly.",
    buttonText: "Chat On WhatsApp",
        whatsappLink: "https://wa.me/+2349117148123",
  },
  {
    image: Slide3,
    bigText: "Drive Quality. Drive Confidence.",
    smallText:
      "We provide reliable, tested, and premium cars for every budget.",
    buttonText: "Message Us",
      whatsappLink: "https://wa.me/+2349117148123",
  },
];


const featuredCars = [
  {
    image: F,
    name: "Toyota Camry 2018",
    price: "₦8,500,000",
    mileage: "92,000 km",
    transmission: "Automatic",
        whatsappLink: "https://wa.me/+2349117148123",
        reach:"Get this Car"
  },
  {
    image: Fa,
    name: "Lexus RX350 2017",
    price: "₦14,000,000",
    mileage: "80,000 km",
    transmission: "Automatic",
    whatsappLink: "https://wa.me/+2349117148123",
    reach:"Own Now"
  },
  {
    image: Fab,
    name: "Mercedes C300 2016",
    price: "₦12,000,000",
    mileage: "70,000 km",
    transmission: "Automatic",
       whatsappLink: "https://wa.me/+2349117148123",
       reach:"Acess me"
  },
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <>
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="hero"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="contentInsider">
                <h1>{slide.bigText}</h1>
                <p>{slide.smallText}</p>
                <a href={slide.whatsappLink} target="_blank">
                  <button className="bydreach">{slide.buttonText}</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

   {/* the images products Displayed */}

    <div className="featured-container">
  <h2>Featured Cars</h2>
  <div className="cars-grid">
    {featuredCars.map((car, index) => (
      <div className="car-card" key={index}>
        <img src={car.image} alt={car.name} />
        <h3>{car.name}</h3>
        <p className="price">{car.price}</p>
        <p className="specs">{car.transmission} • {car.mileage}</p>
        <a href={car.whatsappLink} target="_blank">
          <button>{car.reach}</button>
        </a>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default Home;
