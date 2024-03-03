import { Box } from '@chakra-ui/react';
import React from 'react';
import FirstSlider from '../components/FirstSlider';
import MiddleHomeCompo from '../components/MiddleHomeCompo';
import SecTwoHome from '../components/SecTwoHome';
import AboveFooter from '../components/AboveFooter';
import SecThreeHome from '../components/SecThreeHome';

function Home() {
  return (
    <Box mt={10}>
      <FirstSlider />
      <MiddleHomeCompo />
      <SecTwoHome />
      <SecThreeHome />
      <AboveFooter />
    </Box>
  );
}

export default Home;
