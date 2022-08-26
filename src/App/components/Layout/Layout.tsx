import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink";



const Layout = () => {
  return (
        <>
    <header>
      <CustomLink to="/"  text='Home'></CustomLink>
      <CustomLink to="/post" text='Post'></CustomLink>
      <CustomLink to="/product" text='Product'></CustomLink>
    </header>
    <Outlet />
<footer>2022</footer>
        </>
  );
};

export default Layout;
