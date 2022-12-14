import {Route,Routes} from "react-router-dom";
import Home from "./AdminHome";
import AddProducts from "./AdminAddProducts";
import Products from "./AdminProducts";

function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/addproducts" element={<AddProducts/>}></Route>
        </Routes>
    </div>
}
export default AllRoutes;