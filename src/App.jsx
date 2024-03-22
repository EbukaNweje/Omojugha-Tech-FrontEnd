import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sign from './Auth/Signup';
import Login from './Auth/Login';
import Cart from './Components/Cart';
import Layout from './Routes/Layout';
import Home from './Pages/Home';






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
    element: <Cart/>
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