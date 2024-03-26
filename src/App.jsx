import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sign from './Auth/Sign';
import Sign from './Auth/Signup';
import Login from './Auth/Login';
// import Cart from './Components/Cart';
import MyCart from './Components/cartPage/Cart';
import Layout from './Routes/Layout';
import Home from './Pages/Home';
import CheckOutcomponent from './Components/checkoutpage/CheckOut';





const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Sign/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/cart',
    element: <MyCart/>
  } ,
  {
    path: '/check',
    element: <CheckOutcomponent />
  } ,
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element : <Home/>
      }
    ]
  }
    
]);


const App = () => {
  return (
    
      <RouterProvider router={router} />
  );
};

export default App;