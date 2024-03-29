import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ParallelTwoImgSlide1 from './ParallelTwoImgSlide1';
function MiddleHomeCompo() {
  return (
    <Box width={'98vw'} px={3}>
      <ParallelTwoImgSlide1 />
      <img
        width={'100%'}
        style={{
          borderRadius: '10px',
        }}
        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708945475_home_page_1240x209.jpg?im=Resize=(1240,150)"
        alt=""
      />
      <Box display={{ base: 'none', md: 'block' }} cursor={'pointer'}>
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709216809_AHMEDABAD.jpg?im=Resize=(1680,320)"
          alt="1"
        />
      </Box>
      <Box>
        <img
          width="100%"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709239789_Air_Conditioners_Week_1680x320.jpg?im=Resize=(1240,150)"
          alt=""
        />
      </Box>
      <SimpleGrid columns={2} my={3}>
        <img
          style={{
            borderRadius: '10px',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708707961_Month_End_Deals_on_Home_and_Lifestyle_1240x209.jpg?im=Resize=(1241,195)"
          alt=""
        />
        <img
          style={{
            borderRadius: '10px',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709100427_Slim_banner_fw-webzvv.jpg?im=Resize=(1241,195)"
          alt=""
        />
      </SimpleGrid>
    </Box>
  );
}

export default MiddleHomeCompo;
