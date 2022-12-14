import { useEffect ,useState} from "react";



function Products() {
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/products`).then((res) => res.json()).then((res) => setData(res))
    },[])

    return <div>
        <h1>Products</h1>
        <div>
            {data.map((e) => {
                {e.name}
                {e.price}
                {e.image}
                {e.description}
            })}
        </div>
    </div>
}
export default Products;