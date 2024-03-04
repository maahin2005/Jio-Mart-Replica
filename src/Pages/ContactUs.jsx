import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function ContactUs() {
  return (
    <Box width={'80%'} margin={'auto'} padding={10}>
      <Text fontWeight={700} fontSize={'1.5rem'}>
        CONTACT US
      </Text>
      <Text fontWeight={600} fontSize={'.9rem'} mt={3}>
        We are committed to provide you with the best possible support. Here's
        how you can get in touch with us:
      </Text>
      <Text fontWeight={700} fontSize={'1.5rem'} mt={3}>
        Customer Support
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={3}>
        WhatsApp us:{' '}
        <b
          style={{
            color: '#0078ad ',
          }}
        >
          70003 70003
        </b>
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={3}>
        Email at:{' '}
        <b
          style={{
            color: '#0078ad ',
          }}
        >
          cs@jiomart.com
        </b>
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={3}>
        Call on:{' '}
        <b
          style={{
            color: '#0078ad ',
          }}
        >
          1800 890 1222
        </b>
        <Text>8:00 AM to 8:00 PM, 365 days</Text>
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={3}>
        Log a complaint:{' '}
        <b
          style={{
            color: '#0078ad ',
          }}
        >
          click here
        </b>
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={3}>
        See previously raised complaints:{' '}
        <b
          style={{
            color: '#0078ad ',
          }}
        >
          click here
        </b>
      </Text>
      <Text fontSize={'.8rem'} fontWeight={600} mt={10}>
        We value your time and we are committed to ensure satisfaction in all
        your interactions with us.
      </Text>
    </Box>
  );
}

export default ContactUs;
