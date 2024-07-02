import { Button, Navbar } from "flowbite-react";
import { seleteValue } from "../reducs/feature/countslice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BiSolidCartAdd } from "react-icons/bi";

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { key } from "localforage";
import { list } from "postcss";
// import { seletetotalItems } from "../reducs/feature/card/CardSlice";
import { seletetotalItems } from "../reducs/feature/card/cardslices";

export default function NavBar() {
  const totalItems=useSelector(seletetotalItems)
  console.log("test totalitems",totalItems)
    const location = useLocation();
    // console.log("location: ", location);
    const pathname = location?.pathname;
    // console.log("pathname: ", pathname);
    const [navbarlist, setnavbarlist] = useState([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
      { name: "Count", path: "/coust" },
    ]);
    const countIncres = useSelector(seleteValue);
    //console.log("count :", countIncres);
    

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 ">
          <div className=" relative">
            <p className=" absolute -top-4 right-3 text-cyan-900">
              {totalItems}
            </p>
            <Link to={`/cart`}>
              <BiSolidCartAdd className=" mr-5" />
            </Link>
          </div>

          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navbarlist.map((list, index) => {
            return (
              <Navbar.Link
                as={Link}
                to={list.path}
                active={pathname === list.path}
                key={index}
              >
                <p>{list.name}</p>
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
