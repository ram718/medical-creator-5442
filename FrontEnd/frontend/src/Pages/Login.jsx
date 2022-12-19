import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Center, 
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {useState,useContext} from "react";
import { Link as Link } from 'react-router-dom';
  import {AuthContext} from "../AuthContext/AuthContext";
  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';

function All() {
  return (
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}


  
  export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {loginUser,isAuth} = useContext(AuthContext);
    const [loading,setLoading] = useState(false);
    // console.log(isAuth)

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'red.400'}>Forgot password?</Link>
                </Stack>
                <Link to="/"><Button
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.500',
                  }} onClick={loginUser}>
                  Sign in
                </Button></Link>
              </Stack>
            </Stack>
            <All/>
          </Box>
        </Stack>
      </Flex>

      
      
    );
  }