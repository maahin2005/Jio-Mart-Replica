import React from 'react';
import { Box } from '@chakra-ui/react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ParallelTwoImgSlide1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
    autoplay: true,
  };

  return (
    <>
      <Box
        className="slider-container"
        width={'99%'}
        mt={3}
        display={{ base: 'none', md: 'block' }}
      >
        <Slider {...settings}>
          <div>
            <img
              style={{
                borderRadius: '10px',
              }}
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1706104548_rupay.jpg?im=Resize=(1241,195)"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                borderRadius: '10px',
              }}
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1706104575_1240x209.jpg?im=Resize=(1241,195)"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                borderRadius: '10px',
              }}
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1696077709_1683628499_JioPlus_1240x209web.jpg?im=Resize=(1241,195)"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                borderRadius: '10px',
              }}
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708960758_Cred_pay_1240x209.jpg?im=Resize=(1241,195)"
              alt=""
            />
          </div>
        </Slider>
      </Box>
    </>
  );
}

export default ParallelTwoImgSlide1;
