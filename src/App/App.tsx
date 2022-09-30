import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "../style/index.scss";
import * as page from "../pages";
  
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<page.Home />} />
          <Route path="products" element={<page.Products />} />
          <Route path="product/:id" element={<page.Product />} />

          {/* <Route path='pens' element={<p>Pens</p>}/>
            <Route path='notebooks' element={<p>Notebooks</p>}/> */}

          <Route path="login" element={<page.LoginPage />} />
          <Route path="post" element={<page.Post />} />
          <Route path="post/:id" element={<page.SingelPage />} />
          <Route path="*" element={<page.NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
