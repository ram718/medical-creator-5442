import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home"
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Deals from "../Pages/Deals";
import Cart from "../Pages/Cart";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";
import Payment from "../Pages/Payment"


function AllRoutes() {
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/menu" element={<PrivateRoute><Menu/></PrivateRoute>}></Route>
            <Route path="/deals" element={<PrivateRoute><Deals/></PrivateRoute>}></Route>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
            <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
}

export default AllRoutes;