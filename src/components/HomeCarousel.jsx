import React from 'react';
import Slider from "react-slick";
import catalog from '../data/catalog'; // Import your catalog data

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of items visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    arrows: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {catalog.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>R{item.price.toFixed(2)}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
