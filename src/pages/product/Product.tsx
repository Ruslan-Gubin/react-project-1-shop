import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import ButtonGoBack from "../../App/components/ButtonGoBack";
import CustomLink from "../../App/components/CustomLink";



const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <p>Lorem ipsum dolor sit amsoluta officia esse?</p>

        <ul>
            <li><Link  to='pens'>Our Pen</Link></li>
            <li><Link  to='notebooks'>Our Notebooks</Link></li>
            
        </ul>
      

        
        <Outlet/>
        <ButtonGoBack />
        </div>
    );
};

export default Product;