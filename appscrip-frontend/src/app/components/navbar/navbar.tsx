import Image from "next/image";
import React from "react";
import data from "../../navbar-data.json";

interface NavbarData {
  src: string;
}

const Navbar = () => {
  return (
    <>
      <nav className="text-black border-b border-[#E5E5E5] pb-6">
        <div className="px-[274px] py-2 flex justify-evenly bg-[#000000]">
          {[1, 2, 3].map((ele, index) => (
            <div key={index} className="flex gap-[10px]">
              <Image
                src={"/assets/element-4.svg"}
                width={16}
                height={16}
                alt="lorem-sign"
              />
              <p className="text-[#EB4C6B] text-xs font-normal mr-20">
                Lorem ipsum dolor
              </p>
            </div>
          ))}
        </div>
        <header className="pt-11">
          <div className="flex justify-between  px-24">
            <Image src={"assets/Logo.svg"} width={36} height={36} alt="logo" />
            <h1 className="text-4xl font-extrabold ml-36">LOGO</h1>
            <div className="flex items gap-6">
              {data.map((item: NavbarData, i: number) => (
                <Image
                  key={i}
                  src={item.src}
                  width={24}
                  height={24}
                  alt={`image-${i}`}
                  className="cursor-pointer"
                />
              ))}
              <div className="flex items-center gap-2">
                <p className="cursor-pointer">ENG</p>
                <Image
                  src={"/assets/arrow-down.svg"}
                  width={16}
                  height={16}
                  alt="down-arrow"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="pt-16 flex justify-center gap-16">
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">SHOP</p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">SKILLS</p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">STORIES</p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">ABOUT</p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">CONTACT US</p>
          </div>
        </header>
      </nav>
      <div className="py-[72px] flex flex-col gap-4">
        <p className="text-[#252020] text-6xl font-normal text-center">
          DISCOVER OUR PRODUCTS
        </p>
        <p className="text-2xl font-normal text-[#252020] text-center">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut
          elementum dolor.
        </p>
      </div>
    </>
  );
};

export default Navbar;
