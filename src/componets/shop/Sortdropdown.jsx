import React, { useState } from "react";

const Sortdropdown = ({ products, sortedData }) => {
  const [sortDropDown, setDropDown] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setDropDown(value);
    let sortedProducts = [...products];

    switch (value) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedProducts = products;
        break;
    }
    sortedData(sortedProducts);
  };

  return (
    <div>
      <select
        name="sort"
        id="sortdropdown"
        value={sortDropDown}
        onChange={handleSortChange}
        className="focus:outline-none border border-gray-200 py-2 px-3 rounded-md bg-white"
      >
        <option value="">Select...</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default Sortdropdown;
