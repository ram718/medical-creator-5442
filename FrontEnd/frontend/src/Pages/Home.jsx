import {Heading, Divider,Image,Text,Card,Stack,CardBody,CardFooter,Button,Grid,GridItem} from "@chakra-ui/react"
import {Link as Link} from "react-router-dom";
import Carousel from "../components/Carousel";

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

// const carousel = ["https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/7p3qmgJkZyxS0SrYR3ApGT/5a28aaf50d424fa816f6d058d9086904/KFC_Celebration_Bucket_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=1440&fit=fill&fm=webp","https://images.ctfassets.net/wtodlh47qxpt/4MiZL0wr9Z4ZOTjldWEshT/5ed50dce636025cd535b9344ae820d46/DIP_N_CRUNCH_BANNER_1440x396px.jpg?w=1440&fit=fill&fm=webp"];



// console.log(carousel)
function Home() {
    
    
    return <div>
        <div>
            <div>
                <Carousel/>
                {/* <Image src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1440&fit=fill&fm=webp"></Image> */}
                <Image style={{marginLeft:"50%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image>
            </div>
            <div style={{textAlign:"left",padding:"5rem"}}>
               <Heading as="h1" size="xl"> WELCOME BACK ,Pablo</Heading>
               {/* <Text marginLeft={"10px"}>Sign in</Text> */}
            </div>
                <Heading>BROWSE CATEGORIES</Heading>
                <Image style={{marginLeft:"50%"}} src="https://images.ctfassets.net/wtodlh47qxpt/E2WVSq4FOeSCRAGy6LZZa/11c68fb3611baabb79e0ae892338098d/3_Strips.png" alt="image" ></Image>
                <Divider/>
            <div>
            <Grid templateColumns="repeat(4,1fr)" gap={6}>
                {Categories.map((e) => {
                    return <div>
                        
                            <GridItem>

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
                                            <Link to="/menu"><Heading size='md'>{e.title}</Heading></Link>
                                        </CardBody>
                                    </Stack>
                                </Card>
                        </GridItem>
                        
                    </div>

                })}
                </Grid>
            </div>
        </div>
        <div>
            
        </div>
        
    </div>
}

export default Home;