import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { createRoot } from "react-dom/client";
import LoginPage from './pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import { CheckOut } from './pages/CheckOut';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "login",
    element: (<LoginPage/>),
  },
  {
    path: "SignUp",
    element: (<SignUpPage/>),
  },
  {
    path: "Cart",
    element: (<CartPage/>),
  },
  {
    path: "CheckOut",
    element: (<CheckOut/>),
  },
]);

function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
     {/* <Login/> */}
     {/* <SignUpPage/> */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
