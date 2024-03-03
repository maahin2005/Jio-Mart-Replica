import React, { useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { useToast } from '@chakra-ui/react';

function SignInCompo() {
  const navigateToSignIn = useNavigate('');

  const logoutToast = useToast();

  const contextObj = useContext(AuthContext);

  const { isAuth, LogOutProvider } = contextObj;

  return (
    <Button
      bg={'transparent'}
      color="white"
      width={'max-content'}
      borderRadius={'20px'}
      _hover={{ bg: '#0c5273' }}
      display={{ base: 'none', md: 'flex' }}
      onClick={() => {
        navigateToSignIn('/account');
        if (isAuth) {
          navigateToSignIn('/account');
          LogOutProvider();
          logoutToast({
            title: `You are Logged out`,
            status: 'warning',
            isClosable: true,
            position: 'top',
          });
        }
      }}
    >
      <img
        src="https://www.jiomart.com/assets/ds2web/jds-icons/user-icon.svg"
        width={25}
        mr={5}
        alt="signIn-img"
      />
      <Text display={'inline'} fontWeight={700}>
        {isAuth ? 'SignOut' : 'Sign In'}
      </Text>
    </Button>
  );
}

export default SignInCompo;
