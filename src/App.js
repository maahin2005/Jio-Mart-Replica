import './App.css';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import CatogeryNavbar from './components/CatogeryNavbar';

import Footer from './components/Footer';

import AllRoutes from './Routes/AllRoutes.jsx';

import { useLocation } from 'react-router-dom';

function App() {
  const accoundLocation = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <Box width={'100vw'}>
        <Navbar />
        <CatogeryNavbar />
        <AllRoutes />
        {accoundLocation.pathname !== '/account' &&
          accoundLocation.pathname !== '/cart' && <Footer />}
      </Box>
    </ChakraProvider>
  );
}

export default App;
