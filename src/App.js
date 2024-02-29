import { ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';

import Navbar from './components/Navbar';
import CatogeryNavbar from './components/CatogeryNavbar';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <CatogeryNavbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
