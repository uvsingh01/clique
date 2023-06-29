import React from "react";

const Product = () => {
  return (
    <div className="relative bg-gray-900 pb-[4rem] text-white text-center ">
      <h1 className="text-3xl md:text-[60px] font-medium py-10">Products</h1>
      <div className="">
        <img src="./zinc.webp" className="relative inline-block h-full w-3/5 z-10" alt="zinc" />
      </div>
      <div className="absolute top-[30%] left-[8%] h-20 md:h-40 bg-amber-500 w-5/6"></div>
      <p className="pt-10">ZINC-ALUMINIUM</p>
      <div className="text-4xl md:text-[70px] mt-5">Z850</div>
      <div className="text-4xl md:text-[70px] mt-5">Z851</div>
      <div className="cursor-pointer underline underline-offset-4 mt-5 " >see the product</div>

    </div>
  );
};

export default Product;
