"use client";
import Image from "next/image";
import React, { useState } from "react";

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
  ele: Product;
}

const ProductCard = ({ ele }: data) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className=" flex flex-col gap-6">
        <Image
          loading="lazy"
          src={ele.image}
          width={400}
          height={300}
          alt="product image"
          className="object-contain shadow-md border-[#F3F4F6] h-56  lg:w-[400px] lg:h-96"
        />
        <div className="flex flex-col gap-2">
          <p className="text-[#252020] font-bold h-12 no-scrollbar overflow-y-auto">
            {ele.title}
          </p>
          <div className="flex items-center justify-between pr-3">
            <p className="text-[#252020] text-sm font-normal">
              Sign in or Create an account to see pricing
            </p>
            <Image
              src={isClicked ? "/assets/red-heart.svg" : "/assets/heart.svg"}
              width={24}
              height={24}
              alt="heart logo"
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
