import React, { useEffect, useState } from "react";
import Productard from "../Productard";
import Sortdropdown from "./Sortdropdown";

const Productlist = () => {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([initialData]);

  useEffect(() => {
    fetch("./img/Products/products.json")
      .then((res) => res.json())
      .then((data) => {
        setInitialData(data.products);
        setData(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex justify-end items-center w-full ">
        <Sortdropdown products={initialData} sortedData={setData} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 py-3 gap-3">
        {data.length > 0 &&
          data.map((product, i) => (
            <div key={i}>
              <Productard product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Productlist;
