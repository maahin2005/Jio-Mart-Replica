import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import MidTwoImgSlider from './MidTwoImgSlider';
import CommonMidSlider from './CommonMidSlider';
import {
  firstRowArray,
  secondRowArray,
  thirdRowArray,
} from './helpers/slider_img_arrays';

import { firstRowObj } from './helpers/slider_details_obj';

import CommonDetailsCardSlider from './CommonDetailsCardSlider';

function SecTwoHome() {
  return (
    <Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Shop From Top Categories{' '}
      </Text>
      <CommonMidSlider array={firstRowArray} />
      <MidTwoImgSlider />
      <Box mt={10}>
        <CommonMidSlider array={secondRowArray} />
      </Box>
      <Box mt={10}>
        <CommonMidSlider array={thirdRowArray} />
      </Box>
      <CommonDetailsCardSlider arrayOfObj={firstRowObj} />
    </Box>
  );
}

export default SecTwoHome;
