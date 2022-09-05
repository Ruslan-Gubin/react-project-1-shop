import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";
import Products from "../pages/Products";
import Layout from "./components/Layout";
import NotfoundPage from "./components/NotfoundPage";
import LoginPage from "../pages/LoginPage";
import SingelPage from "../pages/SingelPage";
import "../style/index.scss";
import Stationeri from "../pages/Stationeri";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="stationeri" element={<Stationeri />} />

          
          
          {/* <Route path='pens' element={<p>Pens</p>}/>
            <Route path='notebooks' element={<p>Notebooks</p>}/> */}

          <Route path="login" element={<LoginPage />} />
          <Route path="post" element={<Post />} />
          <Route path="post/:id" element={<SingelPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
