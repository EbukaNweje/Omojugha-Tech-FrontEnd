import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './Components/Detail'
import SignUp from './Auth/Signup';
import Login from './Auth/Login';
// import Cart from './Components/Cart';
import MyCart from './Components/cartPage/Cart';
import Layout from './Routes/Layout';
import Home from './Pages/Home';
import CheckOutcomponent from './Components/checkoutpage/CheckOut';
import Signup from './Auth/Signup';





const router = createBrowserRouter([
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/signin',
    element: <Login/>
  },

  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element : <Home/>
      },
      {
        path:'/cart',
        element: <MyCart/>
      },
      {
        path: '/check',
        element: <CheckOutcomponent />
      },
      {
        path: '/detail',
        element: <Detail/>
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