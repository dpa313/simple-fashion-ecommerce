import React from "react";
// import img from '/testimonial/Rectangle 17 (1).png'
const Testimonial = () => {
  const testData = [
    {
      id: 1,
      img: '/testimonial/Rectangle 17.png',
      name: 'John Doe',
      desc: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto'
    },
    {
      id: 2,
      img: '/testimonial/Rectangle 17 (1).png',
      name: 'John Doe',
      desc: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto'
    },
    {
      id: 1,
      img: '/testimonial/Rectangle 17 (2).png',
      name: 'John Doe',
      desc: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto'
    },
  ]
  return (
    <>
           {/* ===========HEADER=========== */}
      <section className="">
      <div className="flex flex-col items-center justify-center pb-8 space-y-2 ">
        <h1 className="text-4xl">TESTIMONIAL</h1>
        <p className="text-md">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
        <hr className="w-[560px] h-[1px] my-2 bg-black border-0 " />
      </div>
               {/* ===========TESTIMONIAL SECTION=========== */}
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap gap-5">
            {
              testData.map(item=>(
                <div key={item.id} className="relative flex flex-col gap-14 lg:w-1/3 w-2/3 h-full">
              <div className="h-[180px] w-full bg-primary-bg "></div>
              {/* // ==============SHAPE START============ */}
              <div className="absolute z-30 top-[65%] left-[50%] translate-x-[-50%] translate-y-[-65%]">
                <div
                  className="relative bg-white w-[300px] h-[250px] bubble after:bubble">
                  <div className="absolute top-0 bottom-0 left-0 right-0 m-auto border border-primary-bg w-[90%] h-[84%]">
                    {/* ===============DESCRIPTION============== */}
                    <div className="absolute top-[-40%] flex flex-col items-center justify-center space-y-3">
                      <img src={item.img} alt="" />
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <p className="text-md text-center">{item.desc}</p>
                    </div>
                    {/* ================BOTTOM SHAPE & ROTATE============= */}
                    <div className="absolute top-[201px] left-[52px] z-40 transform rotate-45 w-[14px] h-[14px] bg-white"></div>
                    <div className="absolute z-50 top-[205px] right-[207px] border-r transform rotate-45 border-primary-bg h-[15%]"></div>
                    <div className="absolute z-50 top-[210px] left-[48px] border-l border-primary-bg h-[10%]"></div>
                  </div>
                </div>
              </div>
              {/* // ==============SHAPE END============ */}
              <div className="h-[180px] w-full bg-primary-bg "></div>
            </div>
              ))
            }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
