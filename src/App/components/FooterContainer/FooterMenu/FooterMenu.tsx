import { Link } from 'react-router-dom';

const FooterMenu = () => {
    return (
        <ul className="footer-menu">
           <li> <Link to="/">Home</Link></li>
           <li> <Link to="/product">Product</Link></li>
           <li> <Link to="/post">Post</Link></li>    
            </ul>
    );
};

export default FooterMenu;