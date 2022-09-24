import Image from "next/image"
import Hamburger from "../Hamburger"
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid"
import { useState } from "react"

const NavBar = ({ data }) => {
   const [hamburgerBtnClick, setHamburgerBtnClick] = useState(false)

   return (
      <nav>
         {/* Hamburger btn */}
         <Hamburger
            style={{
               btn: "md:hidden absolute z-20 top-7 left-5",
               span: `${hamburgerBtnClick ? "bg-black" : "bg-white"}`,
            }}
            click={hamburgerBtnClick}
            setClick={setHamburgerBtnClick}
         />
         {/* Hamburger Menu Slide */}
         <div
            className={`absolute ${
               hamburgerBtnClick ? "top-0" : "-top-full"
            } transition-all z-10 h-full w-full bg-white pt-5 md:hidden`}
         >
            <div className='float-right pr-5'>
               <Image src={data.titleImg} alt='zomato-title' width='150px' height='30px' />
            </div>
            <div className='flex flex-col space-y-10 px-10 mt-28'>
               {data.btnName.map((item, index) => (
                  <a key={index} href='#' className='text-gray-500 text-lg font-light'>
                     {item}
                  </a>
               ))}
            </div>
         </div>

         {/* Flex container: md */}
         <div className='container absolute z-10 translate-x-1/2 right-1/2 px-5 py-5'>
            <div className='hidden md:flex'>
               <div className='flex md:w-2/5 lg:w-3/5 items-center space-x-1'>
                  <DevicePhoneMobileIcon className='h-4 w-4 text-white' />
                  <a href='#' className='text-sm text-white'>
                     Get the App
                  </a>
               </div>
               <div className='flex md:w-3/5 lg:w-2/5 justify-around'>
                  {data.btnName.map((item, index) => (
                     <a key={index} href='#' className='text-white hover:text-gray-300 hover:cursor-pointer'>
                        {item}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </nav>
   )
}
export default NavBar
