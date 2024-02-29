import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import Slider from 'react-slick';
import { IoIosArrowDropright } from 'react-icons/io';

function CommonMidSlider({ array }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex>
      <Box className="slider-container" width={'90%'} margin={'auto'}>
        <Slider {...settings}>
          {array.map((el, i) => (
            <Box key={i}>
              <img src={el} alt={i} style={{ cursor: 'pointer' }} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}

export default CommonMidSlider;
