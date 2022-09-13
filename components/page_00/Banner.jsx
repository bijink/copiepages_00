import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Banner = ({ data }) => {
   return (
      <section className='relative h-[55vh] md:h-[65vh] w-full flex justify-center items-center '>
         <Image
            src={data.img}
            placeholder='blur'
            blurDataURL={data.img}
            alt='zomato-banner'
            layout='fill'
            objectFit='cover'
         />
         {/* Banner-top container */}
         <div className='container px-3 absolute bottom-10 md:bottom-20 lg:bottom-24 xl:bottom-36 flex flex-col items-center space-y-4 md:space-y-8'>
            {/* Title */}
            <Image
               className=''
               src={data.titleImg}
               placeholder='blue'
               blurDataURL={data.titleImg}
               alt='zomato-title'
               width='200px'
               height='40px'
            />
            {/* <p className='text-center text-white text-xl md:text-3xl'>
                  {banner.caption
                     .split(' ')
                     .slice(0, banner.caption.split(' ').length - 1)
                     .join(' ')}
                  <span className='font-bold'>&nbsp;{banner.caption.split(' ').pop()}</span>
               </p> */}
            <p className='text-center text-white text-xl md:text-3xl'>
               {data.caption}
               <span className='font-bold'>&nbsp;{data.place[0]}</span>
            </p>
            {/* Input mobile */}
            <div className='flex flex-col w-full space-y-2 md:hidden '>
               <div className='flex items-center space-x-1 p-2 bg-white rounded-md'>
                  <MapPinIcon className='h-6 w-6 text-red-500' />
                  <input
                     type='text'
                     className=' w-full focus:outline-none'
                     placeholder={data.searchPlaceholder.location[0]}
                  />
               </div>
               <div className='flex items-center space-x-1 p-2 bg-white rounded-md'>
                  <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
                  <input
                     type='text'
                     className='w-full focus:outline-none'
                     placeholder={data.searchPlaceholder.search}
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
                     placeholder={data.searchPlaceholder.location[0]}
                  />
               </div>
               <div className='flex w-2/3 pl-2 justify-center items-center'>
                  <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
                  <input
                     type='text'
                     className=' px-1 p-1 flex-1 focus:outline-none'
                     placeholder={data.searchPlaceholder.search}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
export default Banner
