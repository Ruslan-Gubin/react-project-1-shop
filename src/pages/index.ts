import { lazy } from 'react';

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
const UserSinglPage = lazy(() => import('./UserSinglPage'))
const DialogSinglPage = lazy(() => import('./DialogSinglPage'))
const Checkout = lazy(() => import('./Checkout'))
const About = lazy(() => import('./About'))
const Game = lazy(() => import('./Game'))
const GameResource = lazy(() => import('./GameResource')) 
const RegisterGame = lazy(() => import('./RegisterGame')) 
const TestTask = lazy(() => import('./TestTask')) 
const TestMain = lazy(() => import('./TestMain')) 
const TestAbout = lazy(() => import('./TestAbout')) 

export {
  TestAbout,
  TestMain,
  TestTask,
  RegisterGame,
  GameResource,
  Game,
  About,
  Checkout,
  DialogSinglPage,
  UserSinglPage,
  AddPost,
  registrationPage,
  Product,
  SingelPagePost,
  Products,
  LoginPage,
  Home,
  NotfoundPage,
  Basket,
  SingelPageProduct
}