import React from 'react';
import { Box, Flex, Input, Spacer } from '@chakra-ui/react';
import { IoMdSearch } from 'react-icons/io';

function InputComponent() {
  return (
    <Flex
      height="55%"
      margin="auto 1px"
      align="center"
      bgColor="#ffff"
      width={{ base: '170px', md: '312px' }}
      borderRadius={20}
      p={{ base: 2, md: 3 }}
      gap={{ base: 1, md: 3 }}
    >
      <IoMdSearch fontSize={30} cursor={'pointer'} />
      <form action="">
        <Input
          placeholder="Search JioMart"
          variant={'unstyled'}
          fontSize={{ base: '12px', md: '1rem' }}
          fontWeight={700}
          _placeholder={{
            color: 'black',
          }}
        />
      </form>
      <Spacer />
      <Box cursor={'pointer'}>
        <img
          src="https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg"
          width={30}
        />
      </Box>
    </Flex>
  );
}

export default InputComponent;
