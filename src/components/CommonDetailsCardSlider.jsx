import {
  Box,
  Text,
  Flex,
  Badge,
  Button,
  SimpleGrid,
  Spacer,
  Image,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

function CommonDetailsCardSlider({
  arrayOfObj,
  isButton = true,
  isBadge = true,
  rowLength = arrayOfObj.length,
}) {
  const { setSingleProduct, setProductRow } = useContext(AuthContext);

  return (
    <>
      <SimpleGrid
        width={'90%'}
        margin={'auto'}
        gap={3}
        columns={{ base: 1, sm: 2, md: 3, lg: rowLength }}
      >
        {arrayOfObj.map((el, i) => (
          <>
            <Box
              p={2}
              minHeight={'300px'}
              display={'grid'}
              _hover={{
                transform: 'scale(1.08)', // Increase size on hover
                transition: 'transform 0.3s ease-in', // Smooth transition
              }}
              cursor={'pointer'}
            >
              <Box
                width={'min-content'}
                justifySelf={'end'}
                cursor={'pointer'}
                bg={'transparent'}
                _hover={{ color: 'red' }}
              >
                <FaRegHeart />
              </Box>
              <Image src={el.img} alt="img" />
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
                <Link to={`/products/${i}`}>
                  <Button
                    alignSelf={'end'}
                    border={'2px solid #ccc'}
                    borderRadius={'30px'}
                    variant={'unstyled'}
                    height={'30px'}
                    mt={2}
                    p={3}
                    width="100%"
                    color={'#0c5273'}
                    display="flex"
                    justifyContent={'space-between'}
                    _hover={{ borderColor: '#0c5273' }}
                    onClick={() => {
                      setSingleProduct(el);
                      setProductRow(arrayOfObj);
                    }}
                  >
                    Add <b>+</b>
                  </Button>
                </Link>
              )}
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
}

export default CommonDetailsCardSlider;
