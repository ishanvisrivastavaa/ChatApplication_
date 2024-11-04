import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const Productard = ({ product }) => {
  const productImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : "path/to/placeholder/image.jpg";

  return (
    <div className="w-full group cursor-pointer h-full">
      <div className="relative overflow-hidden">
        <img src={productImage} alt={product.name || "Product"} />
        <div className="absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full">
          <button className="w-11/12 block mx-auto bg-lime-200 hover:bg-lime-400 transition-all duration-200 ease-linear py-2">
            Add To Cart
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button className="bg-lime-200 p-3 rounded-full hover:bg-lime-400 transition-all duration-200 ease-linear">
            <FaRegHeart />
          </button>
          <button className="bg-lime-200 p-3 rounded-full hover:bg-lime-400 transition-all duration-200 ease-linear">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div className="py-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{product.name}</h1>
          <h4 className="font-bold text-lime-500">{product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Productard;
