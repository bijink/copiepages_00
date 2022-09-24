import Image from "next/image"
import { PlayIcon } from "@heroicons/react/20/solid"

const Collections = ({ data }) => {
   return (
      <section className='sm:max-w-full md:container mx-auto px-6 sm:px-9 pt-10'>
         <h4 className='text-xl sm:text-3xl font-medium'>{data.sectionTitle}</h4>
         <div className='flex justify-between pb-5'>
            <p className='text-sm text-gray-500'>{data.caption}</p>
            <a href='#' className='hidden md:flex items-center text-sm font-thin text-red-400'>
               {data.btn}&nbsp;&nbsp;
               <PlayIcon className='w-2 h-2' />
            </a>
         </div>
         {/* images */}
         <div className='grid grid-rows-2 grid-cols-4 gap-2.5'>
            {data.collection.map((item, index) => (
               <div key={index} className='relative w-full h-[300px] col-span-2 sm:row-span-2 sm:col-span-1'>
                  <Image
                     src='https://picsum.photos/200'
                     placeholder='blur'
                     blurDataURL='https://picsum.photos/200'
                     alt={item.title}
                     layout='fill'
                     objectFit='cover'
                     className='rounded-md'
                  />
                  <div className='absolute bottom-0 w-full h-2/6 rounded-b-md flex flex-col justify-end px-2.5 py-2 bg-gradient-to-t from-black'>
                     <p className='text-sm md:text-lg font-light text-white truncate'>{item.title}</p>
                     <p className='text-[12px] md:text-sm font-light text-white flex items-center'>
                        {item.details}&nbsp;&nbsp;
                        <PlayIcon className='w-2 h-2 md:w-3 md:h-3' />
                     </p>
                  </div>
               </div>
            ))}
         </div>
         {/* mobile */}
         <div className='pt-6'>
            <a href='#' className='flex md:hidden items-center text-xs  text-red-400'>
               {data.btn}&nbsp;&nbsp;
               <PlayIcon className='w-3 h-3' />
            </a>
         </div>
      </section>
   )
}
export default Collections
