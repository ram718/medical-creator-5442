
import {Heading, Divider,Image,Text,Card,Stack,CardBody,CardFooter,Button} from "@chakra-ui/react"
import {Link as Link} from "react-router-dom"



// 

// console.log(carousel)
function Home() {
    const Categories = [
        {
            title:"HOT DEALS",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=22.89"
        },
        {
            title:"CHICKEN BUCKETS",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=22.89"
        },
        {
            title:"HOT LAUNCHES",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=22.89"
        },
        {
            title:"B0X MEALS",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=22.89"
        },
        {
            title:"BURGERS",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.89"
        },
        {
            title:"BIRYANI BUCKETS",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=22.89"
        },
        {
            title:"SNACK",
            image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=22.89"
        },
        {
            title:"VIEW MENU",
            image:"https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
        }
    ]

    const carousel = ["https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/7p3qmgJkZyxS0SrYR3ApGT/5a28aaf50d424fa816f6d058d9086904/KFC_Celebration_Bucket_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1440&fit=fill&fm=webp"];
    
    return <div>
        <div>
            <div>
                {/* {
                    setInterval(() => {
                        let i = 0;
                        while(i<carousel.length){
                           <img src={carousel[i]} alt="image"/>

                            if(i === carousel.length-1){
                                i = 0;
                            }
                            i++;
                        }
                    }, 1000)

                } */}
                <Image src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp"></Image>
            </div>
            <div style={{textAlign:"left",padding:"5rem"}}>
               <Heading> WELCOME TO IFC !</Heading>
            </div>
                <Heading>BROWSE CATEGORIES <Divider/></Heading>
            <div>
                {Categories.map((e) => {
                    return <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={e.image}
                                alt={e.title}
                            />

                            <Stack>
                                <CardBody>
                                <Heading size='md'>{e.title}</Heading>

                                {/* <Text py='2'>
                                    {e.title}
                                </Text> */}
                                </CardBody>

                                {/* <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                                </CardFooter> */}
                            </Stack>
                        </Card>
                    </div>

                })}
            </div>
        </div>
        
    </div>
}

export default Home;