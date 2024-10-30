import React from "react";
import Heroslider from "../componets/home/Heroslider";
import Categories from "../componets/home/Categories";
import Featureproducts from "../componets/home/Featureproducts";
import Offerbanner from "../componets/home/Offerbanner";
import Bestseller from "../componets/home/Bestseller";
import Newsletter from "../componets/home/Newsletter";
import Footer from "../componets/Footer";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <Heroslider />
      </div>
      <div className="w-11/12 py-5">
        <div className="title-container py-2">
          <h1 className="title font-bold text-2xl">
            Find Your Design: Furniture Categories
          </h1>
        </div>
        <Categories />
      </div>
      <div className="w-11/12 py-5">
        <div className="title-container py-2">
          <h1 className="title font-bold text-center text-2xl">
            Discover Our Featured Products
          </h1>
        </div>
        <Featureproducts />
      </div>
      <div className="w-11/12 py-5">
        <Offerbanner />
      </div>
      <div className="w-11/12 py-5">
        <div className="title-container py-2">
          <h1 className="title font-bold text-center text-2xl">
            Discover Our Best Seller
          </h1>
        </div>
        <Bestseller />
      </div>
      <div className="w-11/12 py-5">
        <Newsletter />
      </div>
      <div className="w-full bg-gray-100">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
