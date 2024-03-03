import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Badge,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../Context/AuthContextProvider';

import { useToast } from '@chakra-ui/react';

function CartItem() {
  let data = JSON.parse(localStorage.getItem('cart')) || [];

  const [cartData, setCartData] = useState([]);

  const { setLength } = useContext(AuthContext);

  const placedProduct_toast = useToast();

  function removeFromCart(index) {
    const newCart = data.filter((_, i) => i !== index);
    setCartData(newCart);

    setLength(newCart.length);

    localStorage.setItem('cart', JSON.stringify(newCart));

    placedProduct_toast({
      title: 'Product has been Placed',
      description: 'Thanks for buying our Product',
      status: 'success',
      duration: 6000,
      position: 'top',
      isClosable: true,
    });
  }
  useEffect(() => {}, [cartData]);

  return (
    <Box>
      <Box>
        <Flex alignItems={'center'}>
          <Image
            src="https://www.jiomart.com/checkout/smartdeliveryicon.fde57c49a33e0f636779.svg"
            alt="del-cart-img"
          />
          <Text fontWeight={700}>Delivery Between 3 to 5 Days</Text>
        </Flex>
        <SimpleGrid mt={10} columns={{ base: 1, md: 2 }} gap={5}>
          {data.map((item, i) => {
            const words = item.desc.split(' ');

            const shortDescription = words.slice(0, 2).join(' ');

            return (
              <Box
                p={{ base: 3, md: 10 }}
                border={'1px solid #ccc'}
                borderRadius={30}
                key={i}
              >
                <Text
                  fontWeight={700}
                  mb={2}
                  width={{ md: 'max-content' }}
                  textAlign={'right'}
                >
                  {shortDescription}
                </Text>
                <Flex gap={3} display={{ base: 'block', md: 'flex' }}>
                  <img src={item.img} alt={i} />
                  <Box>
                    <Text fontWeight={600} color={'#707070'}>
                      {item.desc}
                    </Text>
                    <Text fontWeight={700}>
                      {item.price}
                      {'    '}
                      <Text
                        color={'#707070'}
                        display={'inline-block'}
                        fontSize={'.8rem'}
                        textDecoration={'line-through'}
                      >
                        {item.realPrice}
                      </Text>
                    </Text>
                    <Badge colorScheme="green">{item.offerBadge}</Badge>
                    <Button
                      display={'block'}
                      mt={5}
                      colorScheme="red"
                      width={{ base: '100%', md: '150px' }}
                      borderRadius={20}
                      onClick={() => removeFromCart(i)}
                    >
                      Place Order
                    </Button>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default CartItem;
