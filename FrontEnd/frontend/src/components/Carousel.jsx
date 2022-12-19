import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Loading from './Loading';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [loading,setLoading] = React.useState(false);
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1440&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/7p3qmgJkZyxS0SrYR3ApGT/5a28aaf50d424fa816f6d058d9086904/KFC_Celebration_Bucket_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1440&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4MiZL0wr9Z4ZOTjldWEshT/5ed50dce636025cd535b9344ae820d46/DIP_N_CRUNCH_BANNER_1440x396px.jpg?w=1440&fit=fill&fm=webp"
  ];

  return (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize="auto"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}