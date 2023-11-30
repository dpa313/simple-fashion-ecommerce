import React from "react";
import gif from '../../assets/logo/Vector.png'
const Videos = () => {
  const videoData = [
    {
      id: 1,
      img: "/videos/Rectangle 4.png",
      img2: "/videos/Rectangle 5.png",
    },
    {
      id: 2,
      img: "/videos/Rectangle 5.png",
      img2: "/videos/Rectangle 4.png",
    },
  ];
  return (
    <div className="container px-5 mx-auto">
      <div className="flex flex-wrap">
        {videoData.map((item) => (
          <div key={item.id} className="md:w-1/2 p-4">
            <div className="relative rounded-sm group">
              <img
                className=" h-100 rounded w-full object-cover object-center"
                src={item.img}
                alt="content"
              />
              <img
                src={gif}
                alt=""
                className="absolute top-0 right-0 bottom-0 left-0 m-auto h-20 w-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
