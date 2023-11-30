import React from "react";
// import img from "../../assets/blog/IMAGE (1).png";
import { BsClock } from "react-icons/bs";
const Blog = () => {
  const blogData = [
    {
      id: 1,
      img: "/blog/IMAGE (1).png",
      desc: "The Life-Affirming Power of Contemporary Street Style",
      date: "June 01, 2023 ",
    },
    {
      id: 2,
      img: "/blog/IMAGE (2).png",
      desc: "The Life-Affirming Power of Contemporary Street Style",
      date: "June 01, 2023 ",
    },
    {
      id: 3,
      img: "/blog/IMAGE (3).png",
      desc: "The Life-Affirming Power of Contemporary Street Style",
      date: "June 01, 2023 ",
    },
  ];
  return (
    <section>
           {/* ===========HEADER=========== */}
      <div className="flex flex-col items-center justify-center pt-14 pb-8 space-y-2 ">
        <h1 className="text-4xl">FASHION NEWS</h1>
        <p className="text-md">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <hr className="w-[560px] h-[1px] my-2 bg-black border-0 " />
      </div>
           {/* ===========BLOG CONTENT=========== */}
      <div className="flex sm:flex-wrap md:flex-nowrap flex-grow gap-5 mx-10">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="relative lg:w-1/3 md:w-2/3 w-full mb-48 flex items-center justify-center"
          >
            <div className="relative flex justify-center">
              <img src={item.img} alt="" className="w-[440px]" />
              <div className="absolute top-52 flex flex-col justify-center w-[380px] h-[220px] bg-primary-bg p-8 shadow-lg">
                <h2 className="text-[18px] font-bold uppercase">{item.desc}</h2>
                <div className="flex items-center gap-5 mt-4">
                  <BsClock />
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
