import { Box, Button, Text, Flex } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  function InnerTextCompo({ text }) {
    return (
      <Button
        display={'block'}
        fontWeight={600}
        color={'#242424'}
        padding={2.5}
        pl={1.5}
        width={'max-content'}
        variant={'unstyled'}
        textAlign={'left'}
        _hover={{ bg: '#e0e0e0' }}
        borderRadius={0}
      >
        {text}
      </Button>
    );
  }

  return (
    <Box
      as="footer"
      display={{ base: 'none', md: 'flex' }}
      height={'520px'}
      width={'100vw'}
      bg={'#f5f5f5'}
      // px={10}
      py={10}
      justifyContent={'space-evenly'}
    >
      <Box textAlign={'left'}>
        <Text fontWeight={700} mb={5} pl={1.5}>
          All Categories
        </Text>
        <InnerTextCompo text="Grocery" />
        <InnerTextCompo text="Electronics " />
        <InnerTextCompo text="Fashion" />
        <InnerTextCompo text="Beauty" />
        <InnerTextCompo text="Home & Kitchen" />
        <InnerTextCompo text="Premium Fruits" />
        <InnerTextCompo text="Books" />
        <InnerTextCompo text="Furniture" />
      </Box>
      <Box textAlign={'left'}>
        <Text fontWeight={700} mb={5} pl={1.5}>
          Popular Categories
        </Text>
        <InnerTextCompo text="Staples" />
        <InnerTextCompo text="Beverages" />
        <InnerTextCompo text="Personal Care" />
        <InnerTextCompo text="Home Care" />
        <InnerTextCompo text="Fruits & Vegetables" />
        <InnerTextCompo text="Baby Care" />
        <InnerTextCompo text="Snacks & Branded Foods" />
        <InnerTextCompo text="Dairy & Bakery" />
      </Box>
      <Box textAlign={'left'}>
        <Text fontWeight={700} mb={5} pl={1.5}>
          Customer Account
        </Text>
        <InnerTextCompo text="My Account" />
        <InnerTextCompo text="My Orders" />
        <InnerTextCompo text="Wishlist" />
        <InnerTextCompo text="Payment Methods" />
        <InnerTextCompo text="Delivery Addresses" />
        <InnerTextCompo text="JioMart Wallet" />
      </Box>
      <Box textAlign={'left'}>
        <Text fontWeight={700} mb={5} pl={1.5}>
          Help & Support
        </Text>
        <InnerTextCompo text="About Us " />
        <InnerTextCompo text="FAQ  " />
        <InnerTextCompo text="Terms & Conditions " />
        <InnerTextCompo text="Privacy Policy " />
        <InnerTextCompo text="E-waste Policy " />
        <InnerTextCompo text="Cancellation & Return Policy" />
        <InnerTextCompo text="Shipping & Delivery Policy " />
        <InnerTextCompo text="AC Installation by resQ " />
      </Box>
      <Box textAlign={'left'}>
        <Text fontWeight={700} mb={5} pl={1.5} fontSize={'30px'}>
          Contact Us
        </Text>
        <Text fontWeight={700} color={'#3e3d3d'}>
          WhatsApp us: 70003 70003
        </Text>
        <Text fontWeight={700} color={'#3e3d3d'}>
          Call us: 1800 890 1222
        </Text>
        <Text fontWeight={700} color={'#3e3d3d'}>
          8:00 AM to 8:00 PM, 365 days
        </Text>
        <Text width="300px" mt={10}>
          Should you encounter any bugs, glitches, lack of functionality,
          delayed deliveries, billing errors or other problems on the website,
          please email us on <b>cs@jiomart.com</b>
        </Text>
        <Box width="100%" p={5} pl={0}>
          <Text fontWeight={'black'} pt={5}>
            Download the App
          </Text>
          <Flex gap={1} mt={2}>
            <a
              width="min-content"
              href="https://play.google.com/store/apps/details?id=com.jpl.jiomart&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={'100%'}
                src="https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg"
                alt=""
              />
            </a>
            <a
              width="min-content"
              href="https://apps.apple.com/in/app/jiomart-online-shopping-app/id1522085683"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={'100%'}
                src="https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg"
                alt=""
              />
            </a>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
