import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  Button,
  Image,
  Heading
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useState,useEffect } from 'react';
import CartItem from '../Pages/CartItem';
import ProductItem from '../Pages/ProductsItem';
import Menu from '../Pages/Menu';


const LinkItems = [
  { name: 'Hot Deals'},
  { name: 'Trending'},
  { name: 'Box Meals'},
  { name: 'Burgers'},
  { name: 'Snacks & Beverages'},
];


export default function Sidebar({ children,data}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}

      />
      
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {

  const [searchTerm,setSearchTerm] = useState("");
  const [searchData,setSearchData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products?q=${searchTerm}`).then((res) => res.json()).then((res) => setSearchData(res))
  },[searchTerm])

  console.log(searchData)

  const handleSearch = (val) => {
    setSearchTerm(val);
    {searchData.map((e) => (
      
        <CartItem {...e}/>
      // <Menu searchData={searchData}/>

      ))}
  }
  

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Image style={{marginLeft:"30%",marginTop:"-25%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image>
      <br />
      <Heading size="lg">IFC Menu</Heading>
      <br />
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} onClick={() => setSearchTerm(link.name)}>
          {link.name}
        </NavItem>
      ))} */}

      <NavItem onClick={() => handleSearch("spicy")}>Hot Deals</NavItem>
      <NavItem onClick={() => handleSearch("")}>Trending</NavItem>
      <NavItem onClick={() => handleSearch("biryani")}>Box Meals</NavItem>
      <NavItem onClick={() => handleSearch("burger")}>Burgers</NavItem>
      <NavItem onClick={() => handleSearch("snack")}>Snacks</NavItem>
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'red.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};