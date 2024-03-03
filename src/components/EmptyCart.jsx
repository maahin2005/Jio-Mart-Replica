import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <Flex width={'100%'} justifyContent="center" mt={10}>
      <Box textAlign={'center'}>
        <Image
          src="https://www.jiomart.com/checkout/msassets/images/empty-cart.svg"
          alt="Empty-cart-img"
          margin={'auto'}
        />
        <Text fontWeight={700} mt={3}>
          Your Cart is Empty
        </Text>
        <Text fontWeight={600} color={'#818181'}>
          It's a nice day to buy the items you saved for later!
        </Text>
        <Text>
          or{' '}
          <Link to="/">
            <b
              style={{
                color: '#0c5273',
              }}
            >
              Continue Shopping
            </b>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default EmptyCart;
