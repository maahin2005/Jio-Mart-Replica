import { ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';

import Navbar from './components/Navbar';
import CatogeryNavbar from './components/CatogeryNavbar';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <CatogeryNavbar />
    </ChakraProvider>
  );
}

export default App;
