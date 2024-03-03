import { Box, Divider, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
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
} from '../components/helpers/slider_details_obj';
import CommonDetailsCardSlider from '../components/CommonDetailsCardSlider';
import BreadCrumb from '../components/BreadCrumb';

function Products() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <Box width={'70%'} m={'auto'} mt={10}>
      <BreadCrumb isCurrentPage={true} />
      <Heading textAlign={'center'} my={10}>
        All Products
      </Heading>
      <CommonDetailsCardSlider arrayOfObj={firstRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={secondRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={thirdRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={forthRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={fifthRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={sixthRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={seventhRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={eighthRowObj} rowLength={3} />
      <Divider />
      <CommonDetailsCardSlider arrayOfObj={ninthRowObj} rowLength={3} />
    </Box>
  );
}

export default Products;
