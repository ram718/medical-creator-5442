import { useState,useEffect } from "react";
import {Grid, GridItem,Image,Text} from "@chakra-ui/react";
import ProductItem from "./ProductsItem";
import Loading from "../components/Loading";
import SideBar from "../components/Sidebar";


function Menu() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState("");
    const [searchData,setSearchData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/products`).then((res) => res.json()).then((res) => {
            setData(res);
            // console.log(res)
            setLoading(false)
        })
    },[])
    // console.log(data)

    useEffect(() => {
        fetch(`http://localhost:8080/products?q=${searchTerm}`).then((res) => res.json()).then((res) => setSearchData(res))
      },[searchTerm])


    return loading ? <Loading/> : <div style={{display:"flex"}}>
        <SideBar
        data={data}
        /> 
        <Grid templateColumns="repeat(3,1fr)" gap={6}>
            {data.length !== 0? data.map((e) => 
                <GridItem key={e.name}>
                    <ProductItem
                        {...e}
                    />
                </GridItem>
            ) : null}
        </Grid>
    </div>
    
}

export default Menu