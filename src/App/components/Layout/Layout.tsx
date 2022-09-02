import { Outlet } from "react-router-dom";
import Footer from "../FooterContainer";
import Header from "../Header";


const Layout = () => {

  return (
        <div  className="wrapper">

        <Header />
          <div className="main">
    <Outlet />
        </div>
<Footer />
 
          </div>
  );
};

export default Layout;
