import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';

import Slider from 'react-slick';
// import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';
import { Link } from 'react-router-dom';

function CommonMidSlider({ array }) {
  const sliderRef = useRef(null);

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <IoIosArrowDropleft
        onClick={onClick}
        style={{
          background: 'transparent',
          color: '#0c5273',
          height: '50px',
          width: '50px',
          zIndex: '10',
          right: '60px',
          top: '150px',
          position: 'relative',
          cursor: 'pointer',
        }}
      ></IoIosArrowDropleft>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <IoIosArrowDropright
        onClick={onClick}
        style={{
          background: 'transparent',
          color: '#0c5273',
          height: '50px',
          width: '50px',
          zIndex: '10',
          bottom: '175px',
          left: '100%',
          position: 'relative',
          cursor: 'pointer',
        }}
      ></IoIosArrowDropright>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
          prevArrow: null,
          nextArrow: null,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
        },
      },
    ],

    beforeChange: (current, next) => {
      if (next === React.Children.count(sliderRef.current.props.children)) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(0);
        }, 500);
      }
    },
    // };
  };

  return (
    <Flex>
      <Box
        className="slider-container"
        width={{ base: '70%', md: '90%' }}
        margin={'auto'}
        mt={0}
      >
        <Slider ref={sliderRef} {...settings}>
          {array.map((el, i) => (
            <Box key={i} width={{ base: '70%', md: '90%' }}>
              <Link to="/products">
                <Image
                  src={el}
                  alt={i}
                  style={{ cursor: 'pointer' }}
                  _hover={{
                    transform: 'scale(1.06)', // Increase size on hover
                    transition: 'transform 0.3s ease-in', // Smooth transition
                  }}
                />
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}

export default CommonMidSlider;
