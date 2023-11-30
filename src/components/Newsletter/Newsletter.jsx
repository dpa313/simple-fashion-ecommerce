import React from "react";
import img from "../../assets/newsletter/Rectangle 13.png";
import { TfiEmail } from "react-icons/tfi";
const Newsletter = () => {
  return (
    <>
           {/* ===========NEWSLETTER HEADER=========== */}
      <div className="flex flex-col items-center justify-center pt-14 pb-12 space-y-2 ">
        <h1 className="text-4xl">NEWSLETTER</h1>
        <p className="text-md">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <hr className="w-[560px] h-[1px] my-2 bg-black border-0 " />
      </div>
           {/* ===========SUBSCRIBE SECTION=========== */}
      <div className="flex justify-center mb-16">
        <div className="relative flex items-center gap-16 ">
          <TfiEmail size={30} className="absolute  left-10  text-primary-bg" />
          <input
            type="email"
            placeholder="Enter your email address"
            className=" h-11 w-[600px] pl-28 outline-none border text-primary-text text-lg border-primary-bg rounded-sm"
          />
          <button className="px-10 py-2 bg-primary-dark text-white text-lg rounded-sm hover:bg-pink-500 transition ease-in-out duration-200 ">
            Subscribe
          </button>
        </div>
      </div>
          {/* ===========SHOP NOW SECTION=========== */}
      <div className="bg-primary-bg body-font mb-20">
        <div className="container mx-auto flex px-40 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-2xl text-[40px] mb-8 font-bold text-primary-text">
              Boys And Girls New Collection <br />
              Free Shipping And Discount Up To 30%
            </h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-primary-dark hover:bg-pink-500 transition ease-in-out duration-200 border-0 py-2 px-10 focus:outline-none  rounded-sm text-2xl">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
            <img
              className="object-cover object-center rounded h-[200px] aling-right"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
