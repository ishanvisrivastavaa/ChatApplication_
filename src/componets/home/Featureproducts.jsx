import React, { useEffect, useState } from "react";
import Productard from "../Productard";
import { FaArrowRightLong } from "react-icons/fa6";

const Featureproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./img/Products/products.json")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 py-3 gap-3">
        {data.length > 0 &&
          data.slice(0,6).map((product) => (
            <div key={product.id}>
              <Productard product={product} />
            </div>
          ))}
      </div>
      <div className="flex w-full justify-center">
        <button className="flex items-center hover:text-lime-400 transition-all duration-500 ease-in justify-center gap-2 mx-auto font-bold ">
          View more <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};

export default Featureproducts;
