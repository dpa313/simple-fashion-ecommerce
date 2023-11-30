import React from "react";
import payementLogo from "../../assets/footer/payment 1.png";
import footerLogo from "../../assets/logo/logo.png";
import { FaSquareFacebook,FaInstagram,FaYoutube } from "react-icons/fa6";
import {CiMail,CiLocationOn,CiPhone} from 'react-icons/ci'
const Footer = () => {
  return (
    <div className="">
      <div className="bg-primary-bg text-primary-text ">
        {/* ================FOOTER TOP============== */}
        <div className="flex flex-grow flex-wrap container mx-auto justify-between py-10  md:pl-20 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" font-bold text-2xl  mb-3">
              About Us
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              eveniet voluptatem aut soluta.
            </p>
            <div className="flex gap-4 text-white pt-4">
            <FaSquareFacebook size={30}/>
            <FaInstagram size={30} />
            <FaYoutube size={30} />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-2xl mb-3">
              Quick Links
            </h2>
            <nav className="list-none space-y-2 text-lg">
              <li>
                <a className=" cursor-pointer hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className=" cursor-pointer hover:text-gray-800">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className=" cursor-pointer hover:text-gray-800">
                  Shop By categories
                </a>
              </li>
              <li>
                <a className=" cursor-pointer hover:text-gray-800">Accessories</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-2xl  mb-3">
              Customer
            </h2>
            <nav className="list-none space-y-2 text-lg">
              <li>
                <a className=" cursor-pointer hover:text-gray-800">My Account</a>
              </li>
              <li>
                <a className=" cursor-pointer hover:text-gray-800">Cart</a>
              </li>
              <li>
                <a className=" cursor-pointer hover:text-gray-800">Checkout</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-2xl mb-3">
              Address
            </h2>
            <div className="space-y-2 text-lg">
              <span className="flex gap-2 items-center">
                <CiLocationOn />
                <a className=" cursor-pointer hover:text-gray-800">West Razabazar, Dhaka, Bangladesh</a>
              </span>
              <span className="flex gap-2 items-center">
                <CiPhone />
                <a className=" cursor-pointer hover:text-gray-800">+8801000000000</a>
              </span>
              <span className="flex gap-2 items-center">
                <CiMail />
                <a className=" cursor-pointer hover:text-gray-800">demo@mail.com</a>
              </span>
            </div>
          </div>
        </div>
        {/* ================FOOTER BOTTOM============== */}
        <div className="bg-primary-dark py-3">
          <div className="container mx-auto py flex justify-between items-center">
            <h3 className="text-primary-text">Copyright Demo. 2022. All Right Reserved</h3>
            <div>
              <img src={footerLogo} alt="" className="h-[50px]" />
            </div>
            <div className="">
              <img src={payementLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
