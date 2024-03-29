import React, { useEffect } from 'react';
import {
  Flex,
  Button,
  useDisclosure,
  Heading,
  Spacer,
  Badge,
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import DrawerComponent from './Drawer';
import InputComponent from './InputComponent';
import SignInCompo from './SignInCompo';
import { Link, useNavigate } from 'react-router-dom';
import PopoverLocation from './PopoverLocation';
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { length } = useContext(AuthContext);

  let data = JSON.parse(localStorage.getItem('cart')) || [];

  const homePageNavigation = useNavigate('');

  useEffect(() => {}, [data.length, length]);

  return (
    <Flex
      bg="#0078ad"
      height="70px"
      justifyContent={'space-around'}
      align={'center'}
      position={'sticky'}
      zIndex={10}
      top={0}
    >
      <Flex width={{ base: '180px', md: '420px' }} align={'center'}>
        <Button
          bg={'transparent'}
          color="white"
          height={{ base: '45px', sm: '50px', md: 55 }}
          width={{ base: '45px', sm: '50px', md: 55 }}
          fontWeight={'black'}
          borderRadius={'100%'}
          _hover={{ bg: '#0c5273' }}
          onClick={onOpen}
        >
          <FiMenu fontSize={55} />
          <DrawerComponent isOpen={isOpen} onClose={onClose} />
        </Button>
        <Heading
          color={'white'}
          fontSize={25}
          alignSelf={'center'}
          display={{ base: 'none', md: 'inline' }}
          cursor={'pointer'}
          onClick={() => {
            homePageNavigation('/');
          }}
        >
          JioMart
        </Heading>
        <Spacer />

        <PopoverLocation />
      </Flex>
      <Flex height="70px" align={'center'} gap={{ base: 1, md: 3 }}>
        <InputComponent />
        <Link to="/cart">
          <Button
            bg={'transparent'}
            color="white"
            height={{ base: '50px', sm: '60px', md: '60px' }}
            width={{ base: '50px', sm: '60px', md: '60px' }}
            borderRadius={'100%'}
            _hover={{ bg: '#0c5273' }}
          >
            <img
              src=" https://www.jiomart.com/assets/ds2web/jds-icons/cart-icon.svg"
              alt="nav-1"
            />
          </Button>
          <Badge
            display={{ base: 'none', lg: 'inline' }}
            colorScheme="red"
            position="relative"
            bottom="10px"
            right="20px"
            borderRadius="50%"
            height={5}
            width={5}
          >
            {length}
          </Badge>
        </Link>
        <SignInCompo />
      </Flex>
    </Flex>
  );
}
export default Navbar;
