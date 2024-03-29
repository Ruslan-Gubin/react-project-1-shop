import React from "react";
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import * as page from "pages";
import { BeforLoadingPage } from "ui";
import { ErrorPage, Layout } from "components";
import "../scss/style.scss";
import { GameLayout } from "./components/Game/GameLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<page.About />} />
        <Route path="products" element={<page.Products />} />
        <Route path="products/:id" element={<page.Product />} />
        <Route path="products/:id/:id" element={<page.SingelPageProduct />} />
        <Route path="login" element={<page.LoginPage />} />
        <Route path="register" element={<page.registrationPage />} />
        <Route path="post" element={<page.UserSinglPage />} errorElement={<ErrorPage />}/>
        <Route path="post/:id" element={<page.SingelPagePost />}errorElement={<ErrorPage />}/>
        <Route path="add-post" element={<page.AddPost />} />
        <Route path="add-post/:id/edit" element={<page.AddPost />} />
        <Route path="user/:id" element={<page.UserSinglPage />} />
        <Route path="dialog/:id" element={<page.DialogSinglPage />} />
        <Route path="cart" element={<page.Basket />} />
        <Route path="checkout" element={<page.Checkout />} />
        <Route path="*" element={<page.NotfoundPage />} />
      </Route>



      <Route path="/game" element={<GameLayout />}>
        <Route index element={<page.Game />} />
        <Route path="resource" element={<page.GameResource />} />
      </Route>

      
      <Route path="/test-router" element={<page.TestTask />}/>
     <Route path="/test-router/main" element={<page.TestMain />} /> 
      <Route path="/test-router/about" element={<page.TestAbout />} />

      <Route path="/game/register" element={<page.RegisterGame />} />
    </>
  )
  );
  
  const FApp = () => {
    return (
      <>
      <React.Suspense fallback={<BeforLoadingPage />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </>
  );
};

export const App = React.memo(FApp);
