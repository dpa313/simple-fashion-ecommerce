import React from "react";
import image from "/categoryImg/IMAGE.png";
import { FaArrowRightLong,FaStar,FaRegStar } from "react-icons/fa6";
const Category = () => {
  const productData = [
    {
      id: 1,
      name: "Name",
      price: 20,
      img: "/categoryImg/IMAGE (1).png",
      ratings: 4,
      isFocused: true,
    },
    {
      id: 2,
      name: "Name",
      price: 20,
      img: "/categoryImg/IMAGE (2).png",
      ratings: 4,
      isFocused: false,
    },
    {
      id: 3,
      name: "Name",
      price: 20,
      img: "/categoryImg/IMAGE (3).png",
      ratings: 4,
      isFocused: false,
    },
    {
      id: 4,
      name: "Name",
      price: 20,
      img: "/categoryImg/IMAGE (4).png",
      ratings: 4,
      isFocused: false,
    },
  ];
  return (
    <section className="text-primary-text ">
           {/* ===========CONTENT HEADING=========== */}
      <div className="flex flex-col items-center justify-center pt-14 pb-8 space-y-2 ">
        <h1 className="text-4xl">WHAT'S NEW</h1>
        <p className="text-md">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <hr className="w-[560px] h-[1px] my-2 bg-black border-0 " />
      </div>
      <div className="flex flex-wrap w-full p-4">
             {/* ===========LEFT CONTENT=========== */}
        <div className="flex flex-wrap lg:w-1/2 p-4 group ">
          <div className=" w-full ">
            <div className="relative overflow-hidden">
              <img
                alt="gallery"
                className="w-full h-[745px] object-cover object-center block group-hover:scale-105 transition ease-in-out duration-300"
                src={image}
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[93%] h-[93%] border border-white group-hover:scale-105 transition ease-in-out duration-300"></div>
            </div>
            <div className="flex justify-between px-2 py-3  group-hover:bg-primary-dark group-hover:text-white transition ease-in-out duration-300">
              <div>
                <h3 className="">Name</h3>
                <h2 className="">$200</h2>
              </div>
              <div className="flex gap-1 text-xs pt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
            </div>
          </div>
        </div>
             {/* ===========RIGHT CONTENT=========== */}
        <div className="flex flex-wrap lg:w-1/2">
          {productData.map((item) => (
            <div key={item.id} className="sm:w-1/2 p-4 cursor-pointer group">
              <div className=" w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className=" w-full h-[320px] object-cover group-hover:scale-105 transition ease-in-out duration-300 "
                  />
                  <div className="absolute top-0 right-0 left-0 bottom-0 m-auto w-[87%] h-[87%]  border border-white group-hover:scale-105 transition ease-in-out duration-300 "></div>
                </div>
                <div className="flex justify-between px-2 py-3 group-hover:bg-primary-dark group-hover:text-white transition ease-in-out duration-300">
                  <div>
                    <h3 className="">{item.name}</h3>
                    <h2 className="">${item.price}</h2>
                  </div>
                  <div className="flex gap-1 text-xs pt-1 ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
