import { Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  GroceriesList,
  Home_KitchenList,
  FashionList,
  ElectronicsList,
  BeautyList,
  Home_ImprovementList,
  SportsList,
  WellnessList,
} from './helpers/dropDown_items';

function CatogeryNavbar() {
  const categoryArray = [
    'Groceries',
    'Home & Kitchen',
    'Fashion',
    'Electronics',
    'Beauty',
    'Home Improvement',
    'Sports, Toys & Luggage',
    'Wellness',
  ];

  const innerList = [
    GroceriesList,
    Home_KitchenList,
    FashionList,
    ElectronicsList,
    BeautyList,
    Home_ImprovementList,
    SportsList,
    WellnessList,
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = index => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

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
        <Menu
          key={i}
          isOpen={openIndex === i}
          onClose={() => setOpenIndex(null)}
        >
          <MenuButton
            variant="ghost"
            fontWeight={600}
            fontSize={'10px'}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            {catName}
          </MenuButton>

          <MenuList
            width={'min-content'}
            color="black"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            transition="none"
            key={i}
          >
            {innerList[i].map((el, j) => (
              <MenuItem key={j} fontWeight={600} color={'gray.600'}>
                {el}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}
    </Flex>
  );
}

export default CatogeryNavbar;
