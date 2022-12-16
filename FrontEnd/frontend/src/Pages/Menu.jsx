import { useState,useEffect } from "react";
import {Grid, GridItem,Image,Text} from "@chakra-ui/react";
import ProductItem from "./ProductsItem";
import Loading from "../components/Loading";


function Menu() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/products`).then((res) => res.json()).then((res) => {
            setData(res);
            // console.log(res)
            setLoading(false)
        })
    },[])
    // console.log(data)

    return loading ? <Loading/> : <div> 
        {data.length !== 0? data.map((e) => 
            <Grid templateColumns="repeat(3,1fr)" gap={4}>
            <ProductItem
                {...e}
            />
            </Grid>
            
            // console.log(e.price)
        ) : null}
    </div>
    
}

export default Menu