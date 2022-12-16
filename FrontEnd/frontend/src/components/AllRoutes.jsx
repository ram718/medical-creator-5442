import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home"
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Deals from "../Pages/Deals"


function AllRoutes() {
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/deals" element={<Deals/>}></Route>
        </Routes>
    </div>
}

export default AllRoutes;