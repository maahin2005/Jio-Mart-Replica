import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';

import Navbar from './components/Navbar';
import CatogeryNavbar from './components/CatogeryNavbar';

import Footer from './components/Footer';

import AllRoutes from './Routes/AllRoutes.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box width={'100vw'}>
        <Navbar />
        <CatogeryNavbar />
        <AllRoutes />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
