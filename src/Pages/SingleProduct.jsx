import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Badge,
  Flex,
  LinkBox,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

import { FaStar } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import CommonDetailsCardSlider from '../components/CommonDetailsCardSlider';
import BreadCrumb from '../components/BreadCrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';

function SingleProduct() {
  const addToCart_toast = useToast();

  const randomNumbers = Array.from(
    { length: 9 },
    () => Math.floor(Math.random() * 15) + 1
  );

  const { singleProduct, productRow, setLength } = useContext(AuthContext);

  const { img, desc, price, realPrice, offerBadge } = singleProduct;

  let newCart = JSON.parse(localStorage.getItem('cart')) || [];

  const addToCart = item => {
    newCart.push(item);
    setLength(newCart.length);

    // Store updated cart data in local storage
    localStorage.setItem('cart', JSON.stringify(newCart));

    addToCart_toast({
      title: 'Product has been Added',
      description: 'go to cart and buy your product',
      status: 'success',
      duration: 9000,
      position: 'top',
      isClosable: true,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [singleProduct, newCart.length]);

  if (!singleProduct?.img) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      mt={5}
      p={2}
      height={{ base: '500px', md: 'auto' }}
      mb={{ base: 2, md: 20 }}
    >
      <Box padding={{ md: 10 }} ml={{ md: 5 }} pb={2}>
        <BreadCrumb isCurrentPage={true} pathname={desc} />
      </Box>
      <Box
        display={{ base: 'block', md: 'flex' }}
        justifyContent="center"
        mt={{ md: 10 }}
        mb={{ base: 0, md: 100 }}
        gap={{ md: 20 }}
      >
        <Box width={{ md: '25%' }}>
          <Image width={'100%'} src={img} alt="img-" boxShadow={'md'} p={20} />
          <Button
            mt={5}
            width={'100%'}
            bg={'#0c85bc'}
            color={'white'}
            _hover={{ bg: '#0c5273' }}
            p={6}
            borderRadius={30}
            fontWeight={700}
            onClick={() => addToCart(singleProduct)}
          >
            Add to Cart
          </Button>
        </Box>
        <Box
          textAlign={'left'}
          justifySelf={'start'}
          width={{ base: '100%', md: '40%' }}
          // height={{ base: 'min-content', md: '600px' }}
          p={{ base: 2 }}
          // overflow={{ base: 'hidden', md: 'scroll' }}
          // css={{
          //   '&::-webkit-scrollbar': {
          //     display: 'none !important', // Hide the scrollbar
          //   },
          // }}
        >
          <Heading>{desc}</Heading>
          <Box
            width={{ md: 'max-content' }}
            display={'flex'}
            justifyContent="start"
            gap={2}
            mb={{ md: 5 }}
            p={2}
            mt={5}
            boxShadow={'sm'}
          >
            <FaStar color="#fabf0e" width="100%" />
            <FaStar color="#fabf0e" width="100%" />
            <FaStar color="#fabf0e" width="100%" />
            <FaStar color="#fabf0e" width="100%" />
            <FaStar color="#fabf0e" width="100%" />
            <Badge>{Math.floor(Math.random() * 500 + 1)}</Badge>
          </Box>
          <Text fontSize={'1.5rem'} fontWeight={700} mt={3} mb={3}>
            Price - {price} <Badge colorScheme="green">{offerBadge}</Badge>
          </Text>

          <Box>
            <Text color="#5e5d5d" fontWeight={600}>
              M.R.P:{' '}
              <Text display={'inline'} textDecoration="line-through">
                {realPrice}
              </Text>{' '}
              (Incl. of all taxes)
            </Text>
            <Text fontWeight={700} mt={3} mb={3}>
              Warranty : {Math.floor(Math.random() * 2 + 1)} Year
            </Text>
          </Box>
          <Divider colorScheme="black" />
          <Heading mt={3}>Offers ({Math.floor(Math.random() * 10)})</Heading>
          <LinkBox
            as="article"
            p="5"
            mt={5}
            borderWidth="1px"
            rounded="md"
            cursor={'pointer'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Flex gap={2}>
                <Image
                  src={
                    'https://www.jiomart.com/assets/ds2web/jds-icons/additional-offer-icon.svg'
                  }
                />

                <Box>
                  <Text fontSize=".9rem" fontWeight={600}>
                    ADDITIONAL OFFERS
                  </Text>
                  <Text fontSize=".8rem" color={'#939292'}>
                    Rs 100 Cashback on the first purchase of Rs 600 Or Above
                  </Text>
                  <Text fontSize=".6rem" color={'#b6b5b5'} fontWeight={600}>
                    1 Offer/s Available{' '}
                  </Text>
                </Box>
              </Flex>
              <Box justifySelf={'end'} width="max-content">
                <ChevronRightIcon fontSize={35} />
              </Box>
            </Box>
          </LinkBox>
          <LinkBox
            as="article"
            p="5"
            mt={5}
            borderWidth="1px"
            rounded="md"
            cursor={'pointer'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Flex gap={2}>
                <Image
                  src={
                    'https://www.jiomart.com/assets/ds2web/jds-icons/bank-offer-icon.svg'
                  }
                />

                <Box>
                  <Text fontSize=".9rem" fontWeight={600}>
                    BANK OFFERS
                  </Text>
                  <Text fontSize=".8rem" color={'#939292'}>
                    10% Instant Discount. Min. Trnx 2,000/- Max Discount Up to
                    Rs. 300/- On...
                  </Text>
                  <Text fontSize=".6rem" color={'#b6b5b5'} fontWeight={600}>
                    8 Offer/s Available{' '}
                  </Text>
                </Box>
              </Flex>
              <Box justifySelf={'end'} width="max-content">
                <ChevronRightIcon fontSize={35} />
              </Box>
            </Box>
          </LinkBox>
          <Button
            mt={5}
            // variant={'unstyled'}
            border={'1px solid #c3e8f9b8'}
            color={'#0c5273'}
            borderRadius={20}
            bg={'transparent'}
            _hover={{ borderColor: '#0c5273' }}
            p={5}
          >
            View All
          </Button>
          <Divider mt={10} />
          <Box p={3} pl={0}>
            <Heading
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              Deliver to <HiPencil />
            </Heading>
            <Text fontWeight={600} mt={5}>
              400020{' '}
              <Text
                fontSize="1rem"
                color={'#5f5f5f'}
                fontWeight={600}
                display={'inline'}
                pl={3}
              >
                Mumbai
              </Text>
            </Text>
          </Box>
          <Divider />
          <Heading fontSize={20} mt={5}>
            Article ID: {randomNumbers}
          </Heading>
        </Box>
      </Box>

      <Heading ml={{ base: 2, md: 10 }} mb={10}>
        Shop More
      </Heading>
      <CommonDetailsCardSlider arrayOfObj={productRow} />
    </Box>
  );
}

export default SingleProduct;
