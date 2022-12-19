import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,Image,Button
  } from '@chakra-ui/react';
import { Link as Link } from 'react-router-dom';

function Payment() {

    return  <div>
                <Box style={{marginTop:"10%",marginBottom:"5%"}}>
                <Image style={{marginLeft:"50%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image>
                    <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='500px'
                        backgroundColor={"red.400"}
                        >
                        <AlertIcon boxSize='50px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='xl'>
                            Payment Successful !
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            Thanks for ordering from IFC.<br/> Our delivery partner will arrive soon at your location with in <b>40 minutes</b>.
                        </AlertDescription>
                        <img style={{marginTop:"2%"}} src="https://media3.giphy.com/media/FtPTWPMgMiXwyMlSJd/200.webp?cid=ecf05e47qougx3dd96okgyspueupwjkz1nkrjq0ny40cem3l&rid=200.webp&ct=g" alt="" />
                        
                    </Alert>
                </Box>
                <Box justifyContent={"space-evenly"}>
                    <Link to="/"><Button backgroundColor={"red.600"} padding="1%" marginBottom={"2%"} color="white">Got to Home</Button></Link>
                    <Link to="/menu"><Button backgroundColor={"red.600"} padding="1%" marginBottom={"2%"} marginLeft={"2%"} color="white">Pick up from store</Button></Link>
                </Box>    
            </div>
    
}
export default Payment;