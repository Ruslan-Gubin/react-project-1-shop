import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import * as page from "pages";
import { BeforLoadingPage } from "ui";
import "../scss/style.scss";

const App = React.memo(() => {
  
  return (
    <>
        <React.Suspense fallback={<BeforLoadingPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<page.Home />} />
          <Route path="products" element={<page.Products />} />
          <Route path="products/:id" element={<page.Product />} />
          <Route path="products/:id/:id" element={<page.SingelPageProduct />} />
          <Route path="login" element={<page.LoginPage />} />
          <Route path="register" element={<page.registrationPage />} />
          <Route path="post" element={<page.Posts />} />
          <Route path="post/:id" element={<page.SingelPagePost />} />
          <Route path="add-post" element={<page.AddPost />} />
          <Route path="add-post/:id/edit" element={<page.AddPost />} />
          <Route path="cart" element={<page.Basket />} />
          <Route path="*" element={<page.NotfoundPage />} />
        </Route>
      </Routes>
        </React.Suspense>
    </>
  );
});

export {App};
