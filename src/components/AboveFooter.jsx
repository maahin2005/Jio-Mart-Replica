import { Box } from '@chakra-ui/react';
import React from 'react';

function AboveFooter() {
  return (
    <Box
      width={{ md: '98vw' }}
      display={{ base: 'none', md: 'block' }}
      margin="auto"
    >
      <Box px={{ base: 0, md: 0 }} margin="auto">
        <img
          style={{
            width: '100%',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708754252_D1.jpg?im=Resize=(1240,150)"
          alt="_1f"
        />
        <img
          style={{
            width: '100%',
            borderRadius: '10px',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1675955392_Jio_Cares_1240x194.jpg?im=Resize=(1240,150)"
          alt="_1f"
        />
      </Box>
    </Box>
  );
}

export default AboveFooter;
