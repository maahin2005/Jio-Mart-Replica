import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import MidTwoImgSlider from './MidTwoImgSlider';
import CommonMidSlider from './CommonMidSlider';
import {
  firstRowArray,
  secondRowArray,
  thirdRowArray,
  forthRowArray,
  fifthRowArray,
  sixthRowArray,
  seventhRowArray,
  eighthRowArray,
  ninthRowArray,
  tenthRowArray,
  _11RowArray,
  _12RowArray,
  _13RowArray,
  _14RowArray,
  _15RowArray,
  _16RowArray,
  _17RowArray,
  _18RowArray,
  _19RowArray,
} from './helpers/slider_img_arrays';
import {
  _firstRowArray,
  _secondRowArray,
  _thirdRowArray,
  _forthRowArray,
  _fifthRowArray,
  _sixthRowArray,
  _seventhRowArray,
  _eighthRowArray,
  _ninthRowArray,
  _10RowArray,
  _11thRowArray,
} from './helpers/three_slider_links';

import {
  firstRowObj,
  secondRowObj,
  thirdRowObj,
  forthRowObj,
  fifthRowObj,
  sixthRowObj,
  seventhRowObj,
  eighthRowObj,
  ninthRowObj,
} from './helpers/slider_details_obj';

import CommonDetailsCardSlider from './CommonDetailsCardSlider';
import ParallelThreeSlider from './ParallelThreeSlider';

function SecTwoHome() {
  return (
    <Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Top Deals of 6 Max Saving Days{' '}
      </Text>
      <CommonDetailsCardSlider arrayOfObj={firstRowObj} />
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Shop From Top Categories{' '}
      </Text>
      <CommonMidSlider array={firstRowArray} />

      <MidTwoImgSlider />
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Shop From Top Categories{' '}
      </Text>
      <Box mt={10}>
        <CommonMidSlider array={secondRowArray} />
      </Box>
      <Box mt={10}>
        <CommonMidSlider array={thirdRowArray} />
      </Box>
      <Box mt={10}>
        <CommonMidSlider array={forthRowArray} />
      </Box>
      <Box>
        <img
          width={'100%'}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709216532_gujrati.jpg?im=Resize=(1240,150)"
          alt=""
        />
      </Box>
      <Box>
        <ParallelThreeSlider array={_firstRowArray} />
      </Box>
      <Box>
        <img
          width={'100%'}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1707988225_Global_Store_Desktop.jpg?im=Resize=(1240,150)"
          alt="pink1"
        />
      </Box>
      <Box mt={10}>
        <CommonMidSlider array={fifthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Trending Smartphones
      </Text>
      <CommonDetailsCardSlider arrayOfObj={secondRowObj} />
      <Box>
        <ParallelThreeSlider array={_secondRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Apparels
      </Text>
      <Box>
        <CommonMidSlider array={sixthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Footwear and Accessories
      </Text>
      <Box>
        <CommonMidSlider array={seventhRowArray} />
      </Box>
      <Box>
        <ParallelThreeSlider array={_thirdRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Kitchen Must Haves
      </Text>
      <Box>
        <CommonMidSlider array={eighthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 10 }}>
        Top Picks
      </Text>
      <CommonDetailsCardSlider arrayOfObj={thirdRowObj} />
      <Box>
        <ParallelThreeSlider array={_forthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Home & Lifestyle
      </Text>
      <Box>
        <CommonMidSlider array={ninthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Home Essentials
      </Text>
      <Box>
        <CommonMidSlider array={tenthRowArray} />
      </Box>
      <Box>
        <ParallelThreeSlider array={_fifthRowArray} />
      </Box>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Kitchen Specials
      </Text>
      <Box>
        <CommonMidSlider array={_11RowArray} />
      </Box>
      <Text fontWeight={'black'} pl={{ base: 3, md: 8 }}>
        Electronics Hub
      </Text>
      <Box>
        <CommonMidSlider array={_12RowArray} />
      </Box>
      <Text fontWeight={'black'} pl={{ base: 1, md: 8 }}>
        Top picks - Electronics
      </Text>
      <CommonDetailsCardSlider arrayOfObj={forthRowObj} isButton={false} />
      <Box>
        <ParallelThreeSlider array={_sixthRowArray} />
      </Box>
      <Text fontWeight={'black'} pl={{ base: 1, md: 8 }}>
        Kitchen Essentials
      </Text>
      <Box>
        <CommonMidSlider array={_13RowArray} />
      </Box>
      <CommonDetailsCardSlider arrayOfObj={fifthRowObj} />
      <Box>
        <ParallelThreeSlider array={_seventhRowArray} />
      </Box>
      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
      >
        Food & Beverages
      </Text>
      <Box>
        <CommonMidSlider array={_14RowArray} />
      </Box>
      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
      >
        Top picks
      </Text>
      <CommonDetailsCardSlider arrayOfObj={sixthRowObj} />
      <Box>
        <ParallelThreeSlider array={_eighthRowArray} />
      </Box>
      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
      >
        Home Care
      </Text>
      <Box>
        <CommonMidSlider array={_15RowArray} />
      </Box>
      <Box>
        <ParallelThreeSlider array={_ninthRowArray} />
      </Box>
      <Box>
        <Text
          fontWeight={'black'}
          pl={{ base: 1, md: 8 }}
          pt={{ base: 1, md: 5 }}
        >
          Beauty & Personal Care
        </Text>
        <CommonMidSlider array={_16RowArray} />
      </Box>
      <CommonDetailsCardSlider arrayOfObj={seventhRowObj} />
      <Box>
        <ParallelThreeSlider array={_10RowArray} />
      </Box>

      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
        mb={0}
      >
        Mom & Baby Care
      </Text>
      <Box>
        <CommonMidSlider array={_17RowArray} />
      </Box>
      <Box>
        <ParallelThreeSlider array={_11thRowArray} />
      </Box>
      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
        mb={0}
      >
        Sourced From Reginal Artisans
      </Text>
      <Box>
        <CommonMidSlider array={_18RowArray} />
      </Box>
      <CommonDetailsCardSlider arrayOfObj={eighthRowObj} />
      <Text
        fontWeight={'black'}
        pl={{ base: 1, md: 8 }}
        pt={{ base: 1, md: 5 }}
      >
        Fruits & Vegetables
      </Text>
      <Box>
        <CommonMidSlider array={_19RowArray} />
      </Box>
      <CommonDetailsCardSlider arrayOfObj={ninthRowObj} isBadge={false} />
    </Box>
  );
}

export default SecTwoHome;
