import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { ImLocation } from 'react-icons/im';

function PopoverLocation() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg={'transparent'}
          display={{ base: 'none', md: 'flex' }}
          color="white"
          width={'max-content'}
          borderRadius={'20px'}
          _hover={{ bg: '#0c5273' }}
        >
          <ImLocation fontSize={20} />
          <Text color={'white'} fontSize={15}>
            Deliver to{' '}
            <Text display={'inline'} font-weight={700}>
              Mumbai 400020
            </Text>
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        width="500px"
        p={5}
        display={{ base: 'none', md: 'flex' }}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <Heading fontSize={30}>Select Delivery Location</Heading>
        <Text fontWeight={600} color={'#676565'} my={3}>
          Sign in or set delivery location to see product availability, offers
          and discounts.{' '}
        </Text>
        <Button
          bg="#1279a9"
          _hover={{ bg: '#0c5273' }}
          variant={'unstyled'}
          color={'white'}
          borderRadius={40}
          height={50}
        >
          Sign In to select address
        </Button>
        <SimpleGrid justify="start" width="50%" gap={3} mt={2}>
          <Text
            display={'flex'}
            bg="transparent"
            textAlign={'left'}
            p={5}
            fontWeight={'bold'}
            pl={3}
            color={'#1279a9'}
            borderRadius={40}
            cursor={'pointer'}
            _hover={{ bg: '#44b6eb50' }}
          >
            <ImLocation fontSize={20} /> Enter a pincode
          </Text>
          <Text
            display={'flex'}
            p={5}
            pl={3}
            bg="transparent"
            fontWeight={'bold'}
            color={'#1279a9'}
            borderRadius={40}
            cursor={'pointer'}
            _hover={{ bg: '#44b6eb50' }}
          >
            <img
              src="https://www.jiomart.com/assets/ds2web/jds-icons/detect-dark.svg"
              alt="detect"
            />
            Detect My Location
          </Text>
        </SimpleGrid>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverLocation;
