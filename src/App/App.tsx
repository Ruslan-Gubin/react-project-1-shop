import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import * as page from "pages";
import { BeforLoadingPage } from "ui";
import { ErrorPage, Layout } from "components";
import "../scss/style.scss";

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout />}>
          <Route index element={<page.About />} />
          <Route path="products" element={<page.Products />} />
          <Route path="game" element={<page.Game />} />
          <Route path="products/:id" element={<page.Product />} />
          <Route path="products/:id/:id" element={<page.SingelPageProduct />} />
          <Route path="login" element={<page.LoginPage />} />
          <Route path="register" element={<page.registrationPage />} />
          <Route path="post" element={<page.UserSinglPage />} errorElement={<ErrorPage />}/>
          <Route path="post/:id" element={<page.SingelPagePost />} errorElement={<ErrorPage />} />
          <Route path="add-post" element={<page.AddPost />} />
          <Route path="add-post/:id/edit" element={<page.AddPost />} />
          <Route path="user/:id" element={<page.UserSinglPage />} />
          <Route path="dialog/:id" element={<page.DialogSinglPage />} />
          <Route path="cart" element={<page.Basket />} />
          <Route path="checkout" element={<page.Checkout />} />
          <Route path="*" element={<page.NotfoundPage />} />
        </Route>
))

const FApp = () => {
  return (
    <>
        <React.Suspense fallback={<BeforLoadingPage />}>
      <RouterProvider router={router}/>
        </React.Suspense>
    </>
  );
};

export const App = React.memo(FApp);
