import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigateToHome = useNavigate('');

  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      justifyContent={'space-around'}
      align={'center'}
      p={20}
    >
      <Box width="max-content">
        <img
          width={'70%'}
          src="https://www.jiomart.com/images/cms/wysiwyg/cms/1677147547_pp.png"
          alt="signIn"
        />
      </Box>

      <Box
        height={'max-content'}
        alignSelf={'center'}
        boxShadow={'2xl'}
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
        <Box padding={10} borderBottom={'2px solid #0c5273'} pb={2} pl={0}>
          <Flex gap={5} justify={'start'}>
            <b>+91 - </b>
            <input
              type="text"
              placeholder="Enter your mobile number"
              style={{
                outline: 'none',
              }}
            />
          </Flex>
        </Box>
        <Button
          width={'100%'}
          mt={20}
          borderRadius={40}
          fontSize={25}
          height={50}
          fontWeight="bold"
          _hover={{ bg: '#1383b6', color: 'white' }}
          onClick={() => {
            navigateToHome('/');
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
