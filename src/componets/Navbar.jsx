import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Cart",
      path: "/cart",
    },
    {
      label: "Wishlist",
      path: "/wishlist",
    },
  ];
  return (
    <div className="w-full flex justify-center py-4 items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="w-10/12 flex justify-center py-4 px-2 items-center">
        <div className="flex-1">
          <h1 className="logo font-bold text-2xl"> Furniture</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <ul className="flex gap-2 justify-center items-center">
            {navitems.map((item, i) => (
              <li key={i}>
                <Link to={item.path}> {item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-xl gap-2 flex justify-center items-center">
          <FaRegHeart />
          <RiShoppingCartLine />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
