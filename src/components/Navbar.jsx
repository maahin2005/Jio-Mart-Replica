import React from 'react';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import DrawerComponent from './Drawer';
// import { IoLocationSharp } from 'react-icons';
import { ImLocation } from 'react-icons/im';
import InputComponent from './InputComponent';
import SignInCompo from './SignInCompo';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="#0078ad"
      height="70px"
      justifyContent={'space-around'}
      align={'center'}
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
        >
          JioMart
        </Heading>
        <Spacer />
        <Button
          bg={'transparent'}
          display={{ base: 'none', md: 'flex' }}
          color="white"
          width={'max-content'}
          borderRadius={'20px'}
          _hover={{ bg: '#0c5273' }}
        >
          <ImLocation fontSize={20} />
          <Text color={'white'} fontSize={15}>
            Deliver to{' '}
            <Text display={'inline'} font-weight={700}>
              Mumbai 400020
            </Text>
          </Text>
        </Button>
      </Flex>
      <Flex height="70px" align={'center'} gap={{ base: 1, md: 3 }}>
        <InputComponent />
        <Button
          bg={'transparent'}
          color="white"
          height={{ base: '50px', sm: '60px', md: '60px' }}
          width={{ base: '50px', sm: '60px', md: '60px' }}
          borderRadius={'100%'}
          _hover={{ bg: '#0c5273' }}
        >
          <img src=" https://www.jiomart.com/assets/ds2web/jds-icons/cart-icon.svg" />
        </Button>
        <SignInCompo />
      </Flex>
    </Flex>
  );
}
export default Navbar;
