import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

import Slider from 'react-slick';
import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Image,
} from '@chakra-ui/react';

function CommonDetailsCardSlider({ arrayOfObj }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Box className="slider-container">
      <Slider {...settings}></Slider>
    </Box>
  );
}

export default CommonDetailsCardSlider;
// {
//   arrayOfObj.map((obj, i) => (
//     <Box key={i} display={'inline-block'}>
//       <Card maxW="40%" display={'inline-block'}>
//         <CardBody display={'inline-block'}>
//           <Image src={obj.img} alt={i} borderRadius="lg" />
//           <Stack mt="6" spacing="3">
//             <Text>{obj.desc}</Text>
//             <Text color="blue.600" fontSize="2xl">
//               {obj.price}
//             </Text>
//           </Stack>
//           <Flex>
//             <Text color="gray.500" fontSize="xl">
//               {obj.realPrice}
//             </Text>
//             <Badge variant="solid" colorScheme="green">
//               50% OFF
//             </Badge>
//           </Flex>
//         </CardBody>
//         <CardFooter>
//           <Button variant="solid" colorScheme="blue">
//             Add
//           </Button>
//         </CardFooter>
//       </Card>
//     </Box>
//   ));
// }
