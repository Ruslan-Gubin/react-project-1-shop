import { Outlet } from "react-router-dom";
import Header from "../Header";


const Layout = () => {

  return (
        <>
        <Header />
    <Outlet />
<footer>Footer</footer>
        </>
  );
};

export default Layout;
