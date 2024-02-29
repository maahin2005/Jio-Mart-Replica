import { Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React from 'react';

function CatogeryNavbar() {
  const categoryArray = [
    'Groceries',
    'Premium Fruits',
    'Home & Kitchen',
    'Fashion',
    'Electronics',
    'Beauty',
    'Jewellery',
    'Home Improvement',
    'Sports, Toys & Luggage',
  ];

  function CatogeriesText({ catName }) {
    return (
      <Menu>
        <MenuButton fontWeight={600} fontSize={'10px'}>
          {catName}
        </MenuButton>
        <MenuList color="black">
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      height={'40px'}
      bg={'#0c5273'}
      color={'white'}
      fontSize={'10px'}
      justify="center"
      gap={{ md: 5, lg: 8 }}
    >
      {categoryArray.map((catName, i) => (
        <CatogeriesText catName={catName} key={i} />
      ))}
    </Flex>
  );
}

export default CatogeryNavbar;
