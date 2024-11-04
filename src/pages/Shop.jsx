import React from "react";
import Productlist from "../componets/shop/Productlist";

const Shop = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-11/12 py-4">
        <Productlist />
      </div>
    </div>
  );
};

export default Shop;
