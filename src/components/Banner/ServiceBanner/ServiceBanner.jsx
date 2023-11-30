import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import {TbTruckDelivery} from 'react-icons/tb'
import {BiSupport} from 'react-icons/bi'
import {CiDiscount1} from 'react-icons/ci'
import {RiMoneyDollarBoxFill} from 'react-icons/ri'


const ServiceBanner = () => {
  return (
    <>
    {/* ================SERVICE TOP================ */}
      <section className='absolute top-0 w-full flex justify-center py-2 text-white  bg-[#F49EAD] bg-opacity-50'>
        <div className='w-[50%] flex justify-between items-center'>
          <div className="icon"><FaArrowLeft /></div>
          <h3>Enjoy the same day delivery service before 12:00 PM Request on that day.</h3>
          <div className="icon"><FaArrowRight /></div>
        </div>
      </section>

    {/* ================SERVICE BOTTOM================ */}
    <section className='absolute bottom-0 w-full flex justify-center items-center py-3  text-white bg-[#F49EAD] bg-opacity-50'>
      <div className=" flex justify-between px-24 w-full">
        <div className='flex justify-center items-center gap-5'>
            <TbTruckDelivery  size={45}/>
            <div className="flex flex-col">
                <span className='text-md font-extralight'>Free Delivery</span>
                <span className='text-md font-extralight'>Cash on Delivery</span>
            </div>
        </div>
        <div className='flex justify-center  items-center gap-5 '>
            <BiSupport size={45} />
            <div>
                <span className='text-md font-extralight'>Customer Support 24/7</span><br />
                <span className='text-md font-extralight'>Cash on Deliveryk</span>
            </div>
        </div>
        <div className='flex justify-center  items-center gap-5 '>
            <RiMoneyDollarBoxFill size={45} />
            <div>
                <span className='text-md font-extralight'>Money Return</span><br />
                <span className='text-md font-extralight'>Cash on Delivery</span>
            </div>
        </div>
        <div className='flex justify-center  items-center gap-5 '>
          <CiDiscount1 size={45} />
            <div>
                <span className='text-md font-extralight'>Membership Discount</span><br />
                <span className='text-md font-extralight'>Cash on Delivery</span>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default ServiceBanner