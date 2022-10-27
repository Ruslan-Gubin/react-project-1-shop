import { lazy } from 'react';

const Posts = lazy(() => import('./Posts'))
const Product = lazy(() => import('./Product'))
const Products = lazy(() => import('./Products'))
const SingelPagePost = lazy(() => import('./SingelPagePost'))
const SingelPageProduct = lazy(() => import('./SingelPageProduct'))
const LoginPage = lazy(() => import('./LoginPage'))
const registrationPage = lazy(() => import('./registrationPage'))
const Home = lazy(() => import('./Home'))
const NotfoundPage = lazy(() => import('./NotfoundPage'))
const Basket = lazy(() => import('./Basket'))
const AddPost = lazy(() => import('./AddPost'))

export {
  AddPost,
  registrationPage,
  Product,
  Posts,
  SingelPagePost,
  Products,
  LoginPage,
  Home,
  NotfoundPage,
  Basket,
  SingelPageProduct
}