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
        <div className="lg:px-[274px] w-full py-2 flex justify-evenly bg-[#000000]">
          {[1, 2, 3].map((ele, index) => (
            <div key={index} className="md:flex hidden gap-[10px]">
              <Image
                src={"/assets/element-4.svg"}
                width={16}
                height={16}
                alt="lorem-sign"
              />
              <p className="text-[#EB4C6B] whitespace-nowrap text-xs font-normal lg:mr-20">
                Lorem ipsum dolor
              </p>
            </div>
          ))}
          <div className="flex md:hidden gap-[10px]">
            <Image
              src={"/assets/element-4.svg"}
              width={16}
              height={16}
              alt="lorem-sign"
            />

            <p className="text-[#EB4C6B] whitespace-nowrap text-xs font-normal md:mr-20 mr-8">
              Lorem ipsum dolor
            </p>
          </div>
        </div>
        <header className="pt-11">
          <div className="flex justify-between items-center px-4 lg:px-24">
            <div className="flex gap-2">
            <Image src={"assets/burger-menu.svg"} width={36} height={36} alt="logo" className="md:hidden w-5 h-5" />
            <Image src={"assets/Logo.svg"} width={36} height={36} alt="logo" className="md:w-9 md:h-9 w-5 h-5" />
            </div>
            <h1 className="lg:text-4xl md:text-2xl text-xl font-extrabold lg:ml-36">
              LOGO
            </h1>
            <div className="flex items md:gap-6 gap-3">
              {data.map((item: NavbarData, i: number) => {
                if (true) {
                  return (
                    <Image
                      key={i}
                      src={item.src}
                      width={24}
                      height={24}
                      alt={`image-${i}`}
                      className="cursor-pointer md:block hidden"
                    />
                  );
                }
              })}
              {data.map((item: NavbarData, i: number) => {
                if (i < 3) {
                  return (
                    <Image
                      key={i}
                      src={item.src}
                      width={24}
                      height={24}
                      alt={`image-${i}`}
                      className="cursor-pointer md:hidden block"
                    />
                  );
                }
              })}
              <div className="hidden lg:flex items-center gap-2">
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
          <div className="pt-16 md:flex hidden justify-center gap-16">
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">
              SHOP
            </p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">
              SKILLS
            </p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">
              STORIES
            </p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">
              ABOUT
            </p>
            <p className="text-xl cursor-pointer hover:underline hover:text-gray-500 font-bold text-[#252020]">
              CONTACT US
            </p>
          </div>
        </header>
      </nav>
      <div className="pt-4 pl-4 md:hidden flex gap-2">
        <p className="text-[#BFC8CD] font-normal text-xs">HOME |</p>
        <p className="text-black font-normal text-xs">SHOP</p>
      </div>
      <div className="md:py-[72px] py-10 flex flex-col gap-4">
        <p className="text-[#252020] lg:text-6xl md:text-4xl text-2xl font-normal text-center">
          DISCOVER OUR PRODUCTS
        </p>
        <p className="lg:text-2xl md:text-lg text-base text-pretty font-normal text-[#252020] text-center">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut
          elementum dolor.
        </p>
      </div>
    </>
  );
};

export default Navbar;
