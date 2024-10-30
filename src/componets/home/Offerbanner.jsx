import React from "react";

const Offerbanner = () => {
  return (
    <div className="w-full h-full flex justify-center gap-3 items-center">
      <div className="flex-1 relative">
        <div>
          <img
            src="./img/Hero_banner/01.jpg"
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-4 p-3">
          <h1
            style={{ fontSize: "clamp(1em, 5vw, 2em)" }}
            className=" font-semibold"
          >
            Exclusive Deal:
          </h1>
          <h1
            style={{ fontSize: "clamp(1em, 3vw, 4em)" }}
            className=" font-bold"
          >
            Save Big Stylish Chairs!
          </h1>
        </div>
      </div>
      <div className="flex-1 relative">
        <div>
          <img
            src="./img/Hero_banner/04.jpg"
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-4 p-3">
          <h1
            style={{ fontSize: "clamp(1em, 5vw, 2em)" }}
            className=" font-semibold"
          >
            Limited Time Offer:
          </h1>
          <h1
            style={{ fontSize: "clamp(1em, 3vw, 4em)" }}
            className=" font-bold"
          >
            Get Cozy with Discounted Sofas!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Offerbanner;
