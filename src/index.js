import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },{
//     path: "/about",
//     element: <About/>,
//   },{
//     path: "/login",
//     element: <Login/>,
//   }
// ]);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     {/* <RouterProvider router={router} /> */}
     <BrowserRouter>
     <App/>
     </BrowserRouter>
  </StrictMode>
);
