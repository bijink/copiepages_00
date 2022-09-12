// *Zomato homePage
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Hamburger from '../components/Hamburger'

const Page_00 = ({ data: { titleImg, nav, banner } }) => {
   const [hamburgerBtnClick, setHamburgerBtnClick] = useState(false)

   return (
      <div className='relative '>
         {/* Navbar */}
         <nav>
            {/* Hamburger btn */}
            <Hamburger
               style={{
                  btn: 'md:hidden absolute z-20 top-7 left-5',
                  span: `${hamburgerBtnClick ? 'bg-black' : 'bg-white'}`,
               }}
               click={hamburgerBtnClick}
               setClick={setHamburgerBtnClick}
            />
            {/* Hamburger Menu Slide */}
            <div
               className={`absolute ${
                  hamburgerBtnClick ? 'top-0' : '-top-full'
               } transition-all z-10 h-full w-full bg-white pt-5 md:hidden`}
            >
               <div className='float-right pr-5'>
                  <Image src={titleImg} alt='zomato-title' width='150px' height='30px' />
               </div>
               <div className='flex flex-col space-y-10 px-10 mt-28'>
                  {nav.btnName.map((item, index) => (
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
                     <p className='text-sm text-white'>Get the App</p>
                  </div>
                  <div className='flex md:w-3/5 lg:w-2/5 justify-around'>
                     {nav.btnName.map((item, index) => (
                        <a key={index} href='#' className='text-white hover:text-gray-300 hover:cursor-pointer'>
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </nav>

         {/* Banner */}
         <section className='relative h-[55vh] md:h-[65vh] w-full flex justify-center items-center '>
            <Image
               src={banner.img}
               placeholder='blur'
               blurDataURL={banner.img}
               alt='zomato-banner'
               layout='fill'
               objectFit='cover'
               // priority
               // objectFit="none"
               // objectFit="fill"
               // objectFit="contain"
               // objectFit="scale-down"
            />
            {/* Banner-top container */}
            <div className='container px-3 absolute bottom-10 md:bottom-20 lg:bottom-24 xl:bottom-36 flex flex-col items-center space-y-4 md:space-y-8'>
               {/* Title */}
               <Image
                  className=''
                  src={banner.titleImg}
                  placeholder='blue'
                  blurDataURL={banner.titleImg}
                  alt='zomato-title'
                  width='200px'
                  height='40px'
               />
               <p className='text-center text-white text-xl md:text-3xl'>
                  {banner.caption
                     .split(' ')
                     .slice(0, banner.caption.split(' ').length - 1)
                     .join(' ')}
                  <span className='font-bold'>&nbsp;{banner.caption.split(' ').pop()}</span>
               </p>
               {/* Input mobile */}
               <div className='flex flex-col w-full space-y-2 md:hidden '>
                  <div className='flex items-center space-x-1 p-2 bg-white rounded-md'>
                     <MapPinIcon className='h-6 w-6 text-red-500' />
                     <input
                        type='text'
                        className=' w-full focus:outline-none'
                        placeholder={banner.searchPlaceholder.location}
                     />
                  </div>
                  <div className='flex items-center space-x-1 p-2 bg-white rounded-md'>
                     <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
                     <input
                        type='text'
                        className='w-full focus:outline-none'
                        placeholder={banner.searchPlaceholder.search}
                     />
                  </div>
               </div>
               {/* Input md */}
               <div className='hidden w-3/5 md:flex space-x-2 divide-x-2 divide-solid p-2 bg-white h-12 rounded-md'>
                  <div className='flex w-1/3 items-center'>
                     <MapPinIcon className='h-6 w-6 text-red-500' />
                     <input
                        type='text'
                        className='p-1 w-full focus:outline-none'
                        placeholder={banner.searchPlaceholder.location}
                     />
                  </div>
                  <div className='flex w-2/3 pl-2 justify-center items-center'>
                     <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
                     <input
                        type='text'
                        className=' px-1 p-1 flex-1 focus:outline-none'
                        placeholder={banner.searchPlaceholder.search}
                     />
                  </div>
               </div>
            </div>
         </section>
         {/* <div className='h-[300vh] bg-gray-500'></div> */}
      </div>
   )
}

export default Page_00

export const getStaticProps = async () => {
   const res = await fetch(`${process.env.ROOT_URL}/api/page_00`)
   const data = await res.json()

   return { props: { data } }
}
