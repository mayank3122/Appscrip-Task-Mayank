"use client";
import Image from "next/image";
import React, { useState } from "react";

const FilterDropdown = () => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState("RECOMMENDED");
  const listItems = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];
  return (
    <div className="group relative z-10">
      <div
        onClick={() => setShowList(!showList)}
        role="button"
        tabIndex={0}
        className="flex gap-2 items-center"
      >
        <p className="text-[#252020] font-bold md:text-lg text-sm">
          {selectedItem || "RECOMMENDED"}
        </p>
        <Image
          src={"/assets/arrow-down.svg"}
          width={16}
          height={16}
          alt="down-arrow"
          className="transition-transform duration-300 transform rotate-0 group-focus:rotate-180"
        />
      </div>

      <ul
        className={`right-0 absolute flex flex-col gap-8 bg-[#FFFFFF] shadow-md py-8 md:pl-16 pl-10 md:pr-12 pr-8 rounded border ${
          showList ? "visible" : "invisible"
        }`}
      >
        {listItems.map((ele, i) => {
          return (
            <>
              <li
                key={i}
                style={{ alignSelf: "end" }}
                onClick={() => {
                  setSelectedItem(ele);
                  console.log("Selected Item:", ele);
                }}
                className={`text-[#252020] cursor-pointer flex items-center gap-3 md:text-lg text-sm ${
                  selectedItem === ele ? "font-bold" : "font-normal"
                } whitespace-nowrap`}
              >
                <Image
                  src={"/assets/tick.svg"}
                  width={26}
                  height={26}
                  alt="tick"
                  className={`${selectedItem === ele ? "block" : "invisible"}`}
                />
                <p>{ele}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterDropdown;
