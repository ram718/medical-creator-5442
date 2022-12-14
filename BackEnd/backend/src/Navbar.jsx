import {Link} from "react-router-dom";

function Navbar(){
    return <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/addproducts">Add Products</Link>
    </div>
}

export default Navbar;