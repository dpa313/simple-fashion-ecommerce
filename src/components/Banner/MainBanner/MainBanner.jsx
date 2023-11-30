import React from 'react'
// import banner from '/banner.png'
import banner from '../../../assets/banner/banner.png'
import ServiceBanner from '../ServiceBanner/ServiceBanner'
const MainBanner = () => {
  return (
    <section className='relative w-full h-[calc(100vh-112px)] '>
        <div 
            style={{backgroundImage: `url(${banner})`}}
            className=' w-[100%] h-[100%] bg-cover rounded-sm '>
                <div className=' w-[100%] h-[100%] flex flex-col items-center justify-center gap-3 uppercase'>
                    <h1 className='text-[40px] text-[#2D2D2D] text-bold'>Tagline describe your shop</h1>
                    <button className='py-2 px-5 text-[24px] text-[#2D2D2D] text-bold border border-[#2D2D2D] uppercase hover:bg-white transition ease-in-out duration-200'>shop now</button>
                </div>
        </div>
        {/* ===============SERVICE BANNER================ */}
        <ServiceBanner/>
    </section>
  )
}

export default MainBanner