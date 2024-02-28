import React from 'react';
import { Button, Text } from '@chakra-ui/react';

function SignInCompo() {
  return (
    <Button
      bg={'transparent'}
      color="white"
      width={'max-content'}
      borderRadius={'20px'}
      _hover={{ bg: '#0c5273' }}
      display={{ base: 'none', md: 'flex' }}
    >
      <img
        src="https://www.jiomart.com/assets/ds2web/jds-icons/user-icon.svg"
        width={25}
        mr={5}
      />
      <Text display={'inline'} fontWeight={700}>
        Sign In
      </Text>
    </Button>
  );
}

export default SignInCompo;
