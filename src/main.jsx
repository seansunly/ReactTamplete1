import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './reducs/store.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from './component/page/error/NotFoundPage.jsx'
import Layout from './component/layout/Layout.jsx'
import Aoutus from './component/page/Aoutus.jsx'
import Home from './component/page/homes/Home.jsx'

import ProductDeails from './reducs/feature/productDetail/ProductDeails.jsx'
import Cart from './component/page/cart/Cart.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/", //put outlet in layout
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <Aoutus />,
      },
      {
        path: "/coust",
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <ProductDeails />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store} >
    <RouterProvider router={router}/>
      
    </Provider>
  </React.StrictMode>
);
