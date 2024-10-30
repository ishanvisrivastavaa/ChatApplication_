import React, { useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);
  fetch("./img/Category/categories.json")
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));

  return (
    <div className="w-full grid xl:grid-cols-8 grid-cols-5 gap-3 py-5 px-2">
      {data.length > 0 &&
        data.map((category, i) => (
          <div
            key={i}
            className="flex flex-col h-32 w-32 justify-center items-center p-3 rounded-full bg-lime-200 hover:bg-lime-400 cursor-pointer transition-all duration-500 ease-linear"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-10 h-10 "
            />
            <h1 className="text-sm py-2 font-bold text-nowrap">
              {category.name}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Categories;
