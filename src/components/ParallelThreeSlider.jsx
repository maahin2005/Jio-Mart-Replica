import { Box } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  return (
    <Box className="slider-container" width={'97%'} mt={3} margin={'auto'}>
      <Slider {...settings}>
        {array.map((el, i) => (
          <Box key={i} mt={10} p={2}>
            <img
              style={{
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              src={el}
              alt={i}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ParallelThreeSlider;
