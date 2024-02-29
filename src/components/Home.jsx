import { Box } from '@chakra-ui/react';
import React from 'react';
import FirstSlider from './FirstSlider';
import MiddleHomeCompo from './MiddleHomeCompo';
import SecTwoHome from './SecTwoHome';

function Home() {
  return (
    <Box>
      <FirstSlider />
      <MiddleHomeCompo />
      <SecTwoHome />
    </Box>
  );
}

export default Home;
