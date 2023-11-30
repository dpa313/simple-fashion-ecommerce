// import { data } from "autoprefixer";
import React from "react";
import { FaArrowRightLong, FaStar, FaRegStar } from "react-icons/fa6";
const BestProducts = () => {
  const productData = [
    {
      id: 1,
      name: "Name",
      price: 20,
      img: "/bestSelling/IMAGE (1).png",
      ratings: 4,
    },
    {
      id: 2,
      name: "Name",
      price: 20,
      img: "/bestSelling/IMAGE (2).png",
      ratings: 4,
    },
    {
      id: 3,
      name: "Name",
      price: 20,
      img: "/bestSelling/IMAGE (3).png",
      ratings: 4,
    },
    {
      id: 4,
      name: "Name",
      price: 20,
      img: "/bestSelling/IMAGE (4).png",
      ratings: 4,
    },
  ];
  return (
    <section>
           {/* ===========BEST SELLING HEADER=========== */}
      <div className="flex flex-col items-center justify-center pt-14 pb-8 space-y-2 ">
        <h1 className="text-4xl">BEST SELLING PRODUCTS</h1>
        <p className="text-md">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <hr className="w-[560px] h-[1px] my-2 bg-black border-0 " />
      </div>
           {/* ===========PRODUCT CONTENT=========== */}
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap ">
          {productData.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-fullv group">
              <a className="block relative h-60  overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-60 block group-hover:scale-110 transition ease-in-out duration-300"
                  src={item.img}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[87%] h-[87%] border border-white group-hover:scale-105 transition ease-in-out duration-300"></div>
              </a>
              <div className="flex justify-between bg-primary-dark text-white p-2  group-hover:bg-white group-hover:text-black transition ease-in-out duration-300">
                <div>
                  <h3 className="">{item.name}</h3>
                  <h2 className="">${item.price}</h2>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
