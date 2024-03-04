import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

function AboutUs() {
  return (
    <Box width="80%" margin="auto" padding={20}>
      {/* <Container width={'100%'}> */}
      <Text fontWeight={700} fontSize={'.8rem'} textAlign="center">
        About JioMart
      </Text>
      <Text fontWeight={700} fontSize={'.8rem'} textAlign="center" mt={2}>
        India’s Favorite Online Shopping Platform
      </Text>
      <Text fontWeight={600} fontSize={'.8rem'} textAlign="left" mt={3}>
        At JioMart, our goal is to make shopping easier, faster, and more
        convenient than ever before for our customers. We are committed in our
        mission to build a trustworthy online marketplace which offers the
        widest range of products across the country. With our proven user
        experience and reliable services, we are committed to provide customers
        in India with a trusted and hassle-free one-stop-shop for all their
        shopping needs across various categories such as Electronics, Grocery,
        Fashion, Home & Kitchen, etc.
      </Text>
      <Text fontWeight={600} fontSize={'.8rem'} textAlign="left" mt={3}>
        For over 17 years of operations with Reliance Retail, we have built most
        reliable retail presence that caters to the unique needs of customers in
        India, and we are committed to bring a similar experience online with
        JioMart. Our vast exceptional selection of products make our online
        portal the preferred shopping destination for all kinds of customers.
      </Text>
      <Text fontWeight={600} fontSize={'.8rem'} textAlign="left" mt={3}>
        With our convenient payment options, on time delivery services,
        dependable customer service, and secure online transactions, you can now
        shop smarter, faster and more seamlessly within a few clicks. Our
        commitment to excellence has been recognized worldwide, and we look
        forward to offering our customers a delightful shopping experience
        online with JioMart. #Happy Shopping with JioMart.
      </Text>
      {/* </Container> */}
    </Box>
  );
}

export default AboutUs;
