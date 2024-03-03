import React, { useEffect } from 'react';
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import EmptyCart from '../components/EmptyCart';
import { useState } from 'react';
import CartItem from '../components/CartItem';
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';
import {
  firstRowObj,
  secondRowObj,
} from '../components/helpers/slider_details_obj';
import CommonDetailsCardSlider from '../components/CommonDetailsCardSlider';

function Cart() {
  const [isTrue, setIsTrue] = useState(false);

  let data = JSON.parse(localStorage.getItem('cart')) || [];

  const { length } = useContext(AuthContext);

  useEffect(() => {
    if (length) {
      setIsTrue(true);
    }

    console.log('length: ', length);
  }, [length]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <Box p={{ base: 3, md: 10 }}>
      <Box width={{ base: '100%', md: '80%' }} margin={'auto'}>
        <Heading textAlign={'left'}>My Cart</Heading>
        <SimpleGrid columns={2} my={5} bg={'#f5f5f5'} borderRadius={25} p={1}>
          <Button
            borderRadius={25}
            _hover={{ bg: !isTrue ? '#0c5273' : '#e5f1f7' }}
            bg={isTrue ? 'transparent' : '#0078ad'}
            color={isTrue ? 'black' : 'white'}
            onClick={() => {
              setIsTrue(false);
            }}
          >
            Jiomart{' '}
            <Badge ml={2} colorScheme="red">
              0
            </Badge>
          </Button>
          <Button
            bg={!isTrue ? 'transparent' : '#e5322d'}
            borderRadius={25}
            _hover={{ bg: isTrue ? '#0c5273' : '#e5f1f7' }}
            onClick={() => {
              setIsTrue(true);
            }}
            color={!isTrue ? 'black' : 'white'}
          >
            Smart Bazaar{' '}
            <Badge ml={2} colorScheme="purple">
              {data.length}
            </Badge>
          </Button>
        </SimpleGrid>
        <Box mt={5}>{data.length && isTrue ? <CartItem /> : <EmptyCart />}</Box>
        <Divider mt={20} />
        <Text fontWeight={700} fontSize={20} mt={10} mb={3}>
          Shop More
        </Text>
        <CommonDetailsCardSlider arrayOfObj={firstRowObj} />
        <CommonDetailsCardSlider arrayOfObj={secondRowObj} />
      </Box>
    </Box>
  );
}

export default Cart;
