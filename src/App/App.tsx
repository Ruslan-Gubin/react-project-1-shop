import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "../scss/style.scss";
import * as page from "../pages";
  
const App = React.memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<page.Home />} />
          <Route path="products" element={<page.Products />} />
          <Route path="products/:id" element={<page.Product />} />
          <Route path="products/:id/:id" element={<page.SingelPageProduct />} />
          {/* <Route path="login" element={<page.LoginPage />} /> */}
          <Route path="post" element={<page.Posts />} />
          <Route path="cart" element={<page.Basket />} />
          <Route path="post/:id" element={<page.SingelPagePost />} />
          <Route path="*" element={<page.NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
