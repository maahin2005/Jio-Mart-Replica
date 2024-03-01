import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Flex,
  Button,
  Spacer,
  Box,
  HStack,
  Divider,
} from '@chakra-ui/react';
import SignInCompo from './SignInCompo';

function DrawerComponent({ isOpen, onClose }) {
  function ListOfDrawer({ imgSrc, tagName }) {
    return (
      <HStack
        mb={3}
        mt={5}
        cursor={'pointer'}
        _hover={{ textDecoration: 'underline' }}
      >
        <img src={imgSrc} alt={tagName} />
        <Text fontWeight={600} color={'#242424'}>
          {tagName}
        </Text>
      </HStack>
    );
  }

  return (
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent p={0}>
        <DrawerHeader borderBottomWidth="1px" bg={'#0078ad'}>
          <Flex align={'center'}>
            <Button
              variant="unstyled"
              width={50}
              height={50}
              display={'flex'}
              justifyContent="center"
            >
              <DrawerCloseButton
                borderRadius={'100%'}
                fontWeight={'black'}
                _hover={{ bg: '#0c5273' }}
                p={3}
                width={10}
                height={10}
                display={'flex'}
                justifyContent="center"
                margin={'auto'}
              >
                <img
                  bg={'transparent'}
                  alt="img-d"
                  color="white"
                  src="https://www.jiomart.com/assets/ds2web/jds-icons/angle-left-icon.svg"
                />
              </DrawerCloseButton>
            </Button>

            <Text color={'white'}>Hello</Text>
            <Spacer />
            <SignInCompo />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <Box p={'5px'}>
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/home-icon.svg"
              tagName="Home"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/category-icon.svg"
              tagName="Shop By Category"
            />
            <hr />
            <Text pt={5} fontWeight={700}>
              My Account
            </Text>
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/my-order-icon.svg"
              tagName="My Orders"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/my-list-viewicon.svg"
              tagName="My List"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/wishlist-icon.svg"
              tagName="Wishlist"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/wallet-icon.svg"
              tagName="JioMart Wallet"
            />
            <hr />
            <Text fontWeight={700} pt={5}>
              Offers & More
            </Text>
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/offer-store-icon.svg"
              tagName="Offer Store"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/my-list-newicon.svg"
              tagName="Coupon Store"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/gift-store-icon.svg"
              tagName="Gift Store"
            />
            <hr />
            <Text fontWeight={700} pt={5}>
              Help & Support
            </Text>
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/faqs-icon.svg"
              tagName="FAQs/Need Help"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/about-us-icon.svg"
              tagName="About Us"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/contact-us-icon.svg"
              tagName="Contact Us"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/guide-icon.svg"
              tagName="Guide"
            />
            <hr />
            <ListOfDrawer
              imgSrc="https://www.jiomart.com/assets/ds2web/jds-icons/caution-notice.svg"
              tagName="Caution Notice"
            />
            <hr />
          </Box>
          <Box bg={'#e5f1f7'} width="100%" p={5}>
            <Text fontWeight={'black'} pt={5}>
              Download the App
            </Text>
            <Flex gap={1} mt={4}>
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
            <Divider />
            <Text margin={2} fontSize={'1rem'} mt={10} mb={7}>
              Should you encounter any bugs, glitches, lack of functionality,
              delayed deliveries, billing errors or other problems on the
              website, please email us on <b>cs@jiomart.com</b>
            </Text>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;
