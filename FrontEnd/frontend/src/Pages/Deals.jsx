import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button,SimpleGrid ,Image,Stack,Divider,ButtonGroup,Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import React from 'react';



function Deals() {
    return <div>
        <div>
            <img src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg" alt="image" />
            <div style={{marginTop:"-10%"}}>
                <Heading color={'white'} size="lg">Deals & Offers</Heading>
            </div>
            
        </div>
        
        <div style={{marginTop:"8%",backgroundColor:"black",paddingLeft:"2%",display:"flex",justifyContent:"space-evenly"}}>
        
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg'
                alt='CHICKEN'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' color={"red.500"}>1 PC FREE CHICKEN..</Heading>
                <Text color={'white'}>
                    1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS.
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent={"space-around"}>
                <ButtonGroup spacing='2'>
                <Button variant='ghost' colorScheme='black' color={'white'}>
                    View Details
                </Button>
                <Button variant='solid' colorScheme='red'>
                    Redeem
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg'
                alt='chicken'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' color={"red.500"}>1 PC FREE VEG..</Heading>
                <Text color={'white'}>
                1 PC FREE VEG ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent={"space-evenly"}>
                <ButtonGroup spacing='2'>
                <Button variant='ghost' colorScheme='black' color={'white'}>
                    View Details
                </Button>
                <Button variant='solid' colorScheme='red'>
                    Redeem
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg'
                alt='chicken'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' color={"red.500"}>Upto Rs 100 off..</Heading>
                <Text color={'white'}>
                UPTO RS 100 OFF ON MIN CART VALUE OF RS 599 OR MORE . APPLICABLE ON 4TH ORDER ONWARDS FOR SIGNED IN USER.
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justifyContent={"space-evenly"}>
                <ButtonGroup spacing='2'>
                <Button variant='ghost' colorScheme='black' color={'white'}>
                    View Details
                </Button>
                <Button variant='solid' colorScheme='red'>
                    Redeem
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>

        </div>
            <Image style={{marginLeft:"50%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image>
        
    </div>
}

export default Deals;