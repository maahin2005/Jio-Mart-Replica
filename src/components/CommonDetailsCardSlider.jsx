import {
  Box,
  Text,
  Flex,
  Badge,
  Button,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

function CommonDetailsCardSlider({
  arrayOfObj,
  isButton = true,
  isBadge = true,
}) {
  return (
    <>
      <SimpleGrid
        width={'90%'}
        margin={'auto'}
        gap={3}
        columns={{ base: 1, sm: 2, md: 3, lg: arrayOfObj.length }}
      >
        {arrayOfObj.map((el, i) => (
          <>
            <Box p={2} minHeight={'300px'} display={'grid'}>
              <Box
                width={'min-content'}
                justifySelf={'end'}
                cursor={'pointer'}
                bg={'transparent'}
                _hover={{ color: 'red' }}
              >
                <FaRegHeart />
              </Box>
              <img src={el.img} alt="img" />
              <Text
                fontSize={{ base: '12px', md: '14px' }}
                noOfLines={2}
                overflow="hidden"
              >
                {el?.desc}
              </Text>
              <b>{el?.price}</b>
              <Flex gap={2}>
                <Text
                  fontSize={'10px'}
                  color={'#959494'}
                  fontWeight="bold"
                  textDecoration="line-through"
                >
                  {' '}
                  {el?.realPrice}
                </Text>
                {isBadge && <Badge colorScheme="green">{el?.offerBadge}</Badge>}
              </Flex>
              <Spacer />
              {isButton && (
                <Button
                  alignSelf={'end'}
                  border={'2px solid #ccc'}
                  borderRadius={'30px'}
                  variant={'unstyled'}
                  height={'30px'}
                  mt={2}
                  p={3}
                  width="100%"
                  display="flex"
                  color={'#0c5273'}
                  _hover={{ borderColor: '#0c5273' }}
                  justifyContent={'space-between'}
                >
                  Add <b>+</b>
                </Button>
              )}
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
}

export default CommonDetailsCardSlider;
