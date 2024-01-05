import Image from "next/image";
import React from "react";

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
    <div className="bg-[#000000] mt-8  px-24 text-[#FFFFFF] ">
      <div className="flex justify-between pt-16 border-solid border-b-2 border-[#FFFFFF] pb-8">
        <div className="flex flex-col gap-4">
          <p>BE THE FIRST TO KNOW</p>
          <p>Sign up for updates from mettā muse.</p>
          <div className="flex gap-8">
            <input
              placeholder="Enter your e-mail..."
              className="h-[47px] w-[384px] py-[14px] px-6"
            />
            <button className="text-[#FFFFFF] border-[1.4px] px-8 py-1 opacity-30 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <p>Currency</p>
          <div className="flex gap-2">
            <Image
              src={"/assets/us-flag.svg"}
              width={24}
              height={24}
              className="rounded"
              alt="us-flag"
            />
            <p>+USD</p>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="flex justify-between my-6">
        <ul className="flex flex-col gap-4">
          <li className="text-[#FFFFFF] font-bold text-2xl">mettā muse</li>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
        <ul className="flex flex-col gap-4 mr-24">
          <li className="text-[#FFFFFF] font-bold text-2xl">Quick Links</li>
          <li>Orders & Shipping </li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul className="flex flex-col gap-4">
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
          <li className="flex gap-2">
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
      <p className="flex justify-center">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
