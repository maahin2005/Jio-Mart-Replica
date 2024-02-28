import React from 'react';
import { ChakraProvider, theme, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text textAlign={'center'}>JIO MART REPLICA BY MAHIN</Text>
    </ChakraProvider>
  );
}

export default App;
