import React, { useContext } from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { AuthContext } from '../Context/AuthContextProvider';

import { Navigate, useNavigate } from 'react-router-dom';

import { useToast } from '@chakra-ui/react';

function SignIn() {
  const navigateToHome = useNavigate('');

  const loginToast = useToast();

  const contextObj = useContext(AuthContext);

  const { LoginProvider, isAuth } = contextObj;

  const handleClick = () => {
    if (!isAuth) {
      navigateToHome('/');
      LoginProvider();

      loginToast({
        title: `Successfully Logged In`,
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <SimpleGrid
      columns={2}
      display={{ base: 'none', md: 'grid' }}
      justifyContent={'center'}
      align={'center'}
      p={20}
    >
      <Box
        width="max-content"
        display={{ base: 'none', md: 'flex' }}
        justifyContent={'start'}
      >
        <img
          width={'70%'}
          src="https://www.jiomart.com/images/cms/wysiwyg/cms/1677147547_pp.png"
          alt="signIn"
        />
      </Box>

      <Box
        display={{ base: 'none', md: 'block' }}
        height={'max-content'}
        alignSelf={'center'}
        boxShadow={'2xl'}
        width={'max-content'}
        p={10}
        borderRadius={20}
        style={{
          boxShadow: '0 0 15px 3px rgba(0,0,0,.05)',
        }}
      >
        <Heading>Sign in to JioMart</Heading>
        <Text fontWeight={600} color="#676767" fontSize={15}>
          to access your Addresses, Orders & Wishlist.
        </Text>
        <form action="">
          <Box padding={10} borderBottom={'2px solid #0c5273'} pb={2} pl={0}>
            <Flex gap={3} justify={'start'}>
              <b>+91- </b>
              <Input
                type="text"
                ml={3}
                placeholder="Enter your mobile number"
                variant={'unstyled'}
                pattern="[0-9]*" // Only allow numbers
                maxLength="10" // Limit to 10 characters
                required
              />
            </Flex>
          </Box>
          <Button
            type="submit"
            width={'100%'}
            mt={20}
            borderRadius={40}
            fontSize={25}
            height={50}
            fontWeight="bold"
            _hover={{ bg: '#1383b6', color: 'white' }}
            onClick={handleClick}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  );
}

export default SignIn;
