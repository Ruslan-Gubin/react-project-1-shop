import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";
import Product from "../pages/product";
import Layout from "./components/Layout";
import NotfoundPage from "./components/NotfoundPage";
import SingelPage from "../pages/SingelPage";
import "../style/index.scss";
import LoginPage from "../pages/LoginPage";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="product" element={<Product />}>
          <Route path='pens' element={<p>Pens</p>}/>
            <Route path='notebooks' element={<p>Notebooks</p>}/>
</Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="post/:text/:title" element={<SingelPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
