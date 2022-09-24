import Image from "next/image"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Footer = ({ data }) => {
   let footerLinkTempObj = {}

   return (
      <footer className='bg-zinc-100'>
         {/* container */}
         <div className='container mx-auto px-2 pt-10 md:px-10'>
            {/* top */}
            <div className='flex flex-col justify-between sm:flex-row'>
               <div className='pb-5 sm:pb-0'>
                  <Image src={data.titleImg} alt='zomato-title' width='150px' height='30px' />
               </div>
               <div className='flex flex-row space-x-4'>
                  <div className='w-24 h-9 rounded text-sm font-light flex justify-evenly items-center border border-gray-300 cursor-pointer '>
                     India
                     <ChevronDownIcon className='w-4 h-4 text-gray-500' />
                  </div>
                  <div className='w-24 h-9 rounded text-sm font-light flex justify-evenly items-center border border-gray-300 cursor-pointer '>
                     <GlobeAltIcon className='w-4 h-4 ' />
                     English
                     <ChevronDownIcon className='w-4 h-4 text-gray-500' />
                  </div>
               </div>
            </div>
            {/* center */}
            <div className='grid grid-rows-2 grid-cols-2 sm:grid-cols-3 md:flex flex-row justify-between pt-10 md:py-10'>
               {data.footerLinks.map((item, index) => {
                  if (index === 2) {
                     footerLinkTempObj = Object.assign(footerLinkTempObj, item)
                     return null
                  }
                  if (index === 3) {
                     return (
                        <div key={index} className='flex flex-col space-y-5 pb-5'>
                           {[footerLinkTempObj, item].map((element, i) => (
                              <div key={i} className='flex flex-col space-y-1'>
                                 <h6 className='text-[15px] tracking-widest'>{element.title.toUpperCase()}</h6>
                                 {element.links.map((link, i) => (
                                    <a
                                       key={i}
                                       href='#'
                                       className='text-[15px] font-light text-gray-500 hover:text-gray-800'
                                    >
                                       {link}
                                    </a>
                                 ))}
                              </div>
                           ))}
                        </div>
                     )
                  }
                  return (
                     <div key={index} className='flex flex-col space-y-1 pb-5'>
                        <h6 className='text-[15px] tracking-widest'>{item.title.toUpperCase()}</h6>
                        {item.links.map((link, i) => (
                           <a
                              key={i}
                              href='#'
                              className='text-[15px] font-light text-gray-500 hover:text-gray-800'
                           >
                              {link}
                           </a>
                        ))}
                     </div>
                  )
               })}
               <div className='hidden md:flex flex-col'>
                  <h6 className='text-[15px] tracking-widest'>SOCIAL LINKS</h6>
                  <div className='flex flex-row justify-between py-2'>
                     <div className='bg-black w-5 h-5 rounded-full'></div>
                     <div className='bg-black w-5 h-5 rounded-full'></div>
                     <div className='bg-black w-5 h-5 rounded-full'></div>
                     <div className='bg-black w-5 h-5 rounded-full'></div>
                     <div className='bg-black w-5 h-5 rounded-full'></div>
                  </div>
                  <div className='flex flex-col space-y-2 py-3'>
                     <div className='bg-sky-900 w-full h-10 rounded-md'></div>
                     <div className='bg-sky-900 w-full h-10 rounded-md'></div>
                  </div>
               </div>
            </div>
            {/* bottom */}
            <hr />
            <div className='text-sm font-thin py-6'>{data.terms}</div>
         </div>
      </footer>
   )
}

export default Footer
