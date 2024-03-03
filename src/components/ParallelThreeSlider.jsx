import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function ParallelThreeSlider({ array }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <Box className="slider-container" width={'97%'} mt={3} margin={'auto'}>
      <Slider {...settings}>
        {array.map((el, i) => (
          <Link to="/products">
            <Box
              key={i}
              mt={10}
              p={2}
              _hover={{
                transform: 'scale(1.04)', // Increase size on hover
                transition: 'transform 0.3s ease-in', // Smooth transition
              }}
            >
              <img
                style={{
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
                src={el}
                alt={i}
              />
            </Box>
          </Link>
        ))}
      </Slider>
    </Box>
  );
}

export default ParallelThreeSlider;
