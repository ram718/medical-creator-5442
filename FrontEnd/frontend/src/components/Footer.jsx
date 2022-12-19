import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Image
} from '@chakra-ui/react';
import {Link as Link} from "react-router-dom";


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function SmallWithSocial() {
  return (
    <Box
      bg={"black"}
      color={"white"}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 IFC.Pvt.Ltd. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="black"
      color="white">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src='https://i.ibb.co/V3YB5VK/Whats-App-Image-2022-12-16-at-10-36-15-PM.jpg' alt='logo' width={20}></Image>
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>IFC Food</ListHeader>
            {/* <Link href={'#'}>IFC Food</Link> */}
            <Link to="/menu">Menu</Link>
            <Link href={'#'}>Order Lookup</Link>
            <Link href={'#'}>Gift Card</Link>
            <Link href={'#'}>Nutrition&Allergen</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {/* <Link href={'#'}>Support</Link> */}
            <Link href={'#'}>Get Help</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>IFC Feedback</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            {/* <Link href={'#'}>Help Center</Link> */}
            <Link href={'#'}>Terms and Conditions</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Disclaimer</Link>
            <Link href={'#'}>Caution Notice</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>IFC India</ListHeader>
            <Link href={'#'}>About IFC</Link>
            <Link href={'#'}>IFC Care</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Our Golden Past</Link>
            {/* <Link href={'#'}>LinkedIn</Link> */}
          </Stack>
          <Stack>
            <Link href={"https://restaurants.kfc.co.in/"}>📍 Find an IFC</Link>
          </Stack>
          <Stack>
            <ListHeader>Install App
              <Box style={{marginLeft:"25%",marginTop:"10%"}}>
                <a href={"https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379"}><Image src='data:image/png;base64,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' alt='appstore' width={100}></Image></a>
                <br />
                <a href='https://play.google.com/store/apps/details?id=com.yum.kfc&pli=1'><Image src='data:image/png;base64,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' alt='play' width={100}></Image></a>
              </Box>
            </ListHeader>
          </Stack>
        </SimpleGrid>
          
      </Container>
      <Container>
      <SmallWithSocial/>
      </Container>
    </Box>
  );
}