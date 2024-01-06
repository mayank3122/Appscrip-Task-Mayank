import Image from "next/image";
import React from "react";
import MettaMuse from "../accordions/mobile-footer-accordions/metta-muse";
import QuickLinks from "../accordions/mobile-footer-accordions/quick-links";
import FollowUs from "../accordions/mobile-footer-accordions/follow-us";

const Footer = () => {
  const imageSrc = [
    "/assets/insta.svg",
    "/assets/linkdin.svg",
    "/assets/gpay.svg",
    "/assets/mastercard.svg",
    "/assets/paypal.svg",
    "/assets/amex.svg",
    "/assets/apple-pay.svg",
    "/assets/opay.svg",
  ];
  return (
    <div className="bg-[#000000] mt-8  2xl:px-24 lg:px-12 px-4 text-[#FFFFFF] ">
      <div className="flex md:flex-row flex-col gap-7 md:justify-between pt-16 lg:gap-0 md:gap-34 border-solid border-b-2 border-[#FFFFFF] pb-8">
        <div className="flex flex-col border-b-2 py-8 md:py-0 border-white md:border-none gap-4">
          <p>BE THE FIRST TO KNOW</p>
          <p>Sign up for updates from mettā muse.</p>
          <div className="flex xl:flex-row sm:flex-row flex-col md:flex-col gap-8">
            <input
              placeholder="Enter your e-mail..."
              className=" py-3.5 2xl:w-96 xl:w-60 px-6"
            />
            <button className="text-[#FFFFFF] font-bold border-[1.4px] px-5 py-1.5 opacity-30 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <ul className="md:flex hidden flex-col md:w-72 lg:w-96 xl:w-auto gap-3">
            <li>CONTACT US</li>
            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
            <li>Currency</li>
            <li className="flex gap-2">
              <Image
                src={"/assets/us-flag.svg"}
                width={24}
                height={24}
                className="rounded"
                alt="us-flag"
              />
              <p>+USD</p>
            </li>
            <li className="text-xs break-words md:block hidden font-normal">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </li>
          </ul>
          <ul className="md:hidden flex border-b-2 border-white pb-6 flex-col gap-4">
            <li>CALL US</li>
            <li className="flex gap-4">
              <p className="text-xs">+44 221 133 5360</p>
              <p className="text-xs">customercare@mettamuse.com</p>
            </li>
          </ul>
          <ul className="md:hidden flex mt-5 flex-col gap-4">
            <li>Currency</li>
            <li className="flex gap-2">
              <Image
                src={"/assets/us-flag.svg"}
                width={24}
                height={24}
                className="rounded"
                alt="us-flag"
              />
              <p>+USD</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around md:gap-24 gap-8 my-6">
        <ul className="md:flex hidden flex-col gap-4">
          <li className="text-[#FFFFFF] font-bold text-2xl">mettā muse</li>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
        <div className="md:hidden block">
          <MettaMuse />
        </div>
        <ul className="md:flex hidden flex-col gap-4">
          <li className="text-[#FFFFFF] font-bold text-2xl">Quick Links</li>
          <li>Orders & Shipping </li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="md:hidden block">
          <QuickLinks />
        </div>
        <ul className="md:flex hidden flex-col gap-4 ">
          <li className="text-[#FFFFFF] font-bold text-2xl">Follow Us</li>
          <li className="flex gap-1">
            {imageSrc.map((ele, i) => {
              if (i < 2) {
                return (
                  <Image key={i} src={ele} width={48} height={48} alt={ele} />
                );
              }
            })}
          </li>
          <li>mettā muse Accepts</li>
          <li className="flex gap-2 flex-wrap">
            {imageSrc.map((ele, i) => {
              if (i > 1) {
                return (
                  <Image
                    key={i}
                    src={ele}
                    width={56}
                    height={35}
                    alt={ele}
                    className="border rounded"
                  />
                );
              }
            })}
          </li>
        </ul>
        <div className="md:hidden block">
          <FollowUs />
        </div>
      </div>
      <div className="md:hidden block px-4">
        <ul className="flex flex-col gap-4">
          <li className="text-white">mettā muse Accepts</li>
          <li className="flex gap-2 flex-wrap">
            {imageSrc.map((ele, i) => {
              if (i > 1) {
                return (
                  <Image
                    key={i}
                    src={ele}
                    width={56}
                    height={35}
                    alt={ele}
                    className="border rounded"
                  />
                );
              }
            })}
          </li>
        </ul>
      </div>
      <p className="flex justify-center pt-4">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
