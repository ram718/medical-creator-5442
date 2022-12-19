import {MdOutlineAccountCircle} from "react-icons/md";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Divider,Center, Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link as Link} from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext';
import {useState,useContext} from "react";




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuth,logoutUser,loginUser} = useContext(AuthContext);

  return (
    <>
      <Box bg={useColorModeValue('white.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/"><Image src="https://i.ibb.co/V3YB5VK/Whats-App-Image-2022-12-16-at-10-36-15-PM.jpg" alt="logo" width={20}></Image></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link to="/menu">Menu</Link>
              <Link to="/deals">Deals</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <MdOutlineAccountCircle />
            <Link to="/login">{!isAuth ? <Text marginLeft={"10px"}>Sign in</Text> : <Heading fontSize="sm">Account</Heading>}</Link>
          <Center height='50px'>
            <Divider orientation='vertical' />
           </Center>
            <Menu>
              {isAuth ? <span>₹0</span> : null}
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  
                <Link to="/cart"><Avatar
                  size={'lg'}
                  src={
                    'https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'
                  }
                />
                </Link>
                
              </MenuButton>
              <MenuList>
                {/* <MenuItem>Welcome</MenuItem> */}
                <MenuItem>Account</MenuItem>
                <Link to="/cart"><MenuItem>Go to Cart <img src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg' alt="cart" width={20}/></MenuItem></Link>
                <MenuDivider />
                {isAuth ? <MenuItem onClick={logoutUser}><Link to="/login">Logout</Link></MenuItem> : <MenuItem onClick={loginUser}><Link to="/login">Login</Link></MenuItem>}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}