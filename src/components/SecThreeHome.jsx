import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function SecThreeHome() {
  return (
    <Box width={'98vw'}>
      <Text fontWeight={'black'} p={{ base: 3, md: 8 }}>
        Dairy & Bakery{' '}
      </Text>
      <Flex
        gap={{ base: 0, md: 10 }}
        ml={{ base: 0, md: 10 }}
        mb={5}
        display={{ base: 'block', md: 'flex' }}
      >
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709185534_1.jpg?im=Resize=(223,280)"
          alt=""
        />
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709185554_2.jpg?im=Resize=(223,280)"
          alt=""
        />
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709185575_3.jpg?im=Resize=(223,280)"
          alt=""
        />
      </Flex>
      <Flex
        gap={{ base: 0, md: 5 }}
        ml={{ base: 0, md: 10 }}
        mb={5}
        display={{ base: 'block', md: 'flex' }}
      >
        <img
          style={{
            width: '35%',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1706616824_Curd_and_Shrikhand__Desktop.jpg?im=Resize=(1680,320)"
          alt=""
        />
        <img
          style={{
            width: '35%',
          }}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1706616829_Toast_and_Khari__Desktop.jpg?im=Resize=(1680,320)"
          alt=""
        />
      </Flex>
    </Box>
  );
}

export default SecThreeHome;
