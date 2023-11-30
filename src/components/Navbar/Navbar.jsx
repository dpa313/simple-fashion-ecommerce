import { CiSearch } from "react-icons/ci";
import {FiShoppingBag, FiUser } from "react-icons/fi";
import logo from '../../assets/logo/logo.png'
const Navbar = () => {
    const menuList = [
        'Home',
        'New Arrivals', 
        'Shop By Category', 
        'Accessories',
        'About'
    ]
  return (
    <header className='flex flex-col items-center w-full h-[80px] my-4'>
        <div className='w-[150px] h-[80px] mb-1 cursor-pointer'>
            <img src={logo} alt="logo" className='' />
        </div>
        <nav className="flex justify-between items-center w-[80%]">
            <div className="flex items-center gap-2">
                <CiSearch size={24} className=""/> 
                <input type="text" className=" py-1 outline-none  " />
            </div>
            <ul className='absolute left-[50%] translate-x-[-50%] flex gap-10 text-[20px] font-bold text-[#2D2D2D]'>
                {
                    menuList.map(item=>(
                        <li key={item.length}><a href="">{item}</a></li>
                    ))
                }
            </ul>
            <div className="flex gap-3">
                <FiShoppingBag size={24} className="cursor-pointer" />
                <FiUser size={24} className="cursor-pointer" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar