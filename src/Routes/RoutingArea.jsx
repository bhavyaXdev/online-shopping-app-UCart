import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import WomensFashion from "../Pages/WomensFashion.jsx";
import MensFashion from "../Pages/MensFashion.jsx";
import Electronics from "../Pages/Electronics.jsx";
import HomeLifestyle from "../Pages/HomeLifestyle.jsx";
import Beauty from "../Pages/Beauty.jsx";
import Sports from "../Pages/Sports.jsx";
import Kids from "../Pages/Kids.jsx";
import Watches from "../Pages/Watches.jsx";
import Grocery from "../Pages/Grocery.jsx";
import Books from "../Pages/Books.jsx";
import Automotive from "../Pages/Automotive.jsx";
import Mobiles from "../Pages/Mobiles.jsx";
import Computers from "../Pages/Computers.jsx";
import Fashion from "../Pages/Fashion.jsx";

const RoutingArea = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "category/womens-fashion",
          element: <WomensFashion />,
        },
        {
          path: "category/mens-fashion",
          element: <MensFashion />,
        },
        {
          path: "category/electronics",
          element: <Electronics />,
        },
        {
          path: "category/home-lifestyle",
          element: <HomeLifestyle />,
        },
        {
          path: "category/health-beauty",
          element: <Beauty />,
        },
        {
          path: "category/sports-outdoors",
          element: <Sports />,
        },
        {
          path: "category/kids-baby",
          element: <Kids />,
        },
        {
          path: "category/watches-accessories",
          element: <Watches />,
        },
        {
          path: "category/groceries-pets",
          element: <Grocery />,
        },
        {
          path: "category/books-stationery",
          element: <Books />,
        },
        {
          path: "category/automotive",
          element: <Automotive />,
        },
        {
          path: "category/mobiles-tablets",
          element: <Mobiles />,
        },
        {
          path: "category/computers-laptops",
          element: <Computers />,
        },
        {
          path: "category/fashion",
          element: <Fashion />,
        },
        {
          path: "category/for-you",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutingArea;
