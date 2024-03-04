import React from 'react';
import { Box, Button, Flex, Input, SimpleGrid, Spacer } from '@chakra-ui/react';
import { IoMdSearch } from 'react-icons/io';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
} from '@chakra-ui/react';

function InputComponent() {
  function SimpleRoundCarts({ src, name }) {
    return (
      <Box
        margin={'auto'}
        cursor={'pointer'}
        _hover={{
          transform: 'scale(1.10)', // Increase size on hover
          transition: 'transform 0.3s ease-in', // Smooth transition
        }}
      >
        <img
          src={src}
          alt={name}
          style={{
            width: '50px',
            height: '50px',
          }}
        />
        <Text fontSize={12} textAlign="left" fontWeight="600">
          {name}
        </Text>
      </Box>
    );
  }

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

      <Popover>
        <PopoverTrigger>
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
        </PopoverTrigger>
        <PopoverContent
          p={3}
          width={{ base: 300, md: 460 }}
          mt={3}
          borderRadius={30}
        >
          <PopoverHeader>
            <Text fontWeight={700}>Discover More</Text>
          </PopoverHeader>
          <PopoverBody>
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 1, md: 3 }}>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                biscuits
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                sugar
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                oil
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                mustard oil
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                bharat rice
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                atta
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                surf excel
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                ghee
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                chocolate
              </Button>
              <Button
                variant={'unstyled'}
                border={'1px solid #ccc'}
                borderRadius={20}
              >
                cold drink
              </Button>
            </SimpleGrid>
            <Text fontWeight={700} mt={10}>
              Popular Categories
            </Text>
            <SimpleGrid
              columns={{ base: 2, md: 5 }}
              mt={5}
              mb={20}
              justifyContent={'center'}
            >
              <SimpleRoundCarts
                src="https://www.jiomart.com/images/cms/wysiwyg/popular-categories/beauty.png?v=1673368517"
                name="Beauty"
              />
              <SimpleRoundCarts
                src="https://www.jiomart.com/images/cms/wysiwyg/popular-categories/electronics.png?v=1673368517"
                name="Electronics"
              />
              <SimpleRoundCarts
                src="https://www.jiomart.com/images/cms/wysiwyg/popular-categories/fashion.png?v=1673368517"
                name="Fashion"
              />
              <SimpleRoundCarts
                src="https://www.jiomart.com/images/cms/wysiwyg/popular-categories/grocery.png?v=1673368517"
                name="Groceries"
              />
              <SimpleRoundCarts
                src="https://www.jiomart.com/images/cms/wysiwyg/popular-categories/jewellery.png?v=1673368517"
                name="Jewellery"
              />
            </SimpleGrid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Spacer />
      <Box cursor={'pointer'}>
        <img
          alt="input=compo"
          src="https://www.jiomart.com/assets/ds2web/jds-icons/list-icon.svg"
          width={30}
        />
      </Box>
    </Flex>
  );
}

export default InputComponent;
