import { Box } from '@chakra-ui/react';
import React from 'react';
import FirstSlider from './FirstSlider';
import MiddleHomeCompo from './MiddleHomeCompo';
import SecTwoHome from './SecTwoHome';
import AboveFooter from './AboveFooter';
import SecThreeHome from './SecThreeHome';

function Home() {
  return (
    <Box>
      <FirstSlider />
      <MiddleHomeCompo />
      <SecTwoHome />
      <SecThreeHome />
      <AboveFooter />
    </Box>
  );
}

export default Home;
