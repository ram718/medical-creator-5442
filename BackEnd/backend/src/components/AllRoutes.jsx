import {Route,Routes} from "react-router-dom";
import Home from "../Pages/AdminHome";
import AddProducts from "../Pages/AdminAddProducts";
import Products from "../Pages/AdminProducts";

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