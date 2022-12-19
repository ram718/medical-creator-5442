import {useState,useEffect} from "react";
import CartItem from "./CartItem";
import Loading from "../components/Loading";
import {Button} from '@chakra-ui/react';
import { Link as Link} from "react-router-dom";

export default function Cart() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        let res = JSON.parse(localStorage.getItem("kfc")) || [];
        setData(res)
        setLoading(false);
    },[])
    // console.log(data)


    return (
        <div>
            {loading ? <Loading/> : <div>
                
                    {data.map((e) => 
                        <CartItem {...e}/>
                    )}
            </div>}
            <div>
                <Link to="/payment"><Button marginBottom="5%" bg="red.500" >Proceed to Checkout</Button></Link>
            </div>
        </div>
    )
}