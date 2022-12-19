import { Card, Heading, CardBody, CardFooter,Text,Stack,Divider,Button,ButtonGroup,Image,SimpleGrid } from '@chakra-ui/react'
import React from "react"

export default function ProductItem({image,name,description,price}) {
  let send_data = {name,image,description,price};

  function handleCart(){
    let data = JSON.parse(localStorage.getItem("kfc")) || [];

    data.push(send_data)

    localStorage.setItem("kfc",JSON.stringify(data));

  }


    return  <div>
    
    <Card maxW='md'>
        <CardBody>
        <Image
            src={image}
            alt={name}
            borderRadius='lg'
        />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='red.600' fontSize='2xl'>
         ₹ {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter alignContent="center" justifyContent="space-evenly">
      <ButtonGroup spacing='2' backgroundColor='red' borderRadius="2rem">
        <Button variant='ghost' colorScheme='white' onClick={handleCart}>
          Add to cart <Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" alt="image" />
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  </div>
}