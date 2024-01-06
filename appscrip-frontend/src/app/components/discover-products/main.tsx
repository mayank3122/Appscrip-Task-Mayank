"use client";
import Image from "next/image";
import React, { useState } from "react";
import Aside from "./aside";
import ProductCard from "./product-card";
import FilterDropdown from "./filter-dropdown";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface data {
  productData: Product[];
}
const Main = ({ productData }: data) => {
  const [showAside, setShowAside] = useState(true);
  const toggleAsideVisibility = () => {
    setShowAside(!showAside);
  };
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="flex md:justify-between justify-around py-6 border-b border-t border-[#E5E5E5]">
          <div className="md:flex hidden gap-20">
            <p className="text-lg font-bold text-[#252020]">{`${productData.length} ITEMS`}</p>
            <div
              onClick={toggleAsideVisibility}
              className="flex items-center gap-2"
            >
              <Image
                src={`${
                  showAside
                    ? "/assets/arrow-left.svg"
                    : "/assets/arrow-right.svg"
                }`}
                width={16}
                height={16}
                alt="left-arrow"
                className="cursor-pointer"
              />
              <p className="text-[#888792] cursor-pointer text-base font-normal">
                {showAside ? "HIDE FILTER" : "SHOW FILTER"}
              </p>
            </div>
          </div>
          <p className="text-sm font-bold md:hidden block text-black">FILTER</p>
          <p className="text-black md:hidden">|</p>
          <FilterDropdown />
        </div>

        <div className={`flex ${showAside ? "gap-12" : "gap-0"}`}>
          <div
            className={`md:block hidden transition-all ${
              showAside
                ? " translate-x-5 duration-1000 w-full xl:w-1/2"
                : "opacity-0 w-0"
            } overflow-hidden`}
          >
            {showAside && (
              <div>
                <div className="flex gap-3 py-8">
                  <input
                    type="checkbox"
                    name="customize"
                    id="customize"
                    className=""
                  />
                  <label
                    className="text-[#252020] font-bold"
                    htmlFor="customize"
                  >
                    CUSTOMIZABLE
                  </label>
                </div>
                <Aside />
              </div>
            )}
          </div>
          <div
            className={`mt-8 grid grid-cols-2 ${
              showAside ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } 2xl:grid-cols-${
              showAside ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } gap-8`}
          >
            {productData.map((ele, i) => {
              return <ProductCard key={i} ele={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
