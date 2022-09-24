import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

const Explore = ({ data }) => {
   const [exploreOptClick, setExploreOptClick] = useState({
      0: false,
      1: false,
      2: false,
      3: false,
   })

   return (
      <section className='bg-zinc-50'>
         {/* container */}
         <div className='container mx-auto px-10 py-12'>
            <h4 className='text-xl sm:text-3xl font-medium pb-6'>{data.sectionTitle}</h4>
            <div className='flex flex-col space-y-5'>
               {data.option.map((item, index) => (
                  <div key={index} className='w-full border rounded-lg p-4 bg-white'>
                     <div
                        className='flex justify-between hover:cursor-pointer'
                        onClick={() =>
                           setExploreOptClick(prev => ({
                              ...exploreOptClick,
                              [index]: !prev[index],
                           }))
                        }
                     >
                        <h5 className='text-md sm:text-xl font-light'>{item.optionTitle}</h5>
                        <ChevronDownIcon
                           className={`w-[1.1rem] ${
                              exploreOptClick[index] ? "exploreOptArrowRotate" : "exploreOptArrow"
                           }`}
                        />
                     </div>
                     {[0, 1].includes(index) && (
                        <div className={`${exploreOptClick[index] ? "flex" : "hidden"} flex-row flex-wrap pt-5`}>
                           {item.options.map((opt, i) => (
                              <div key={i} className='flex items-center'>
                                 <a
                                    href='#'
                                    className='text-xs sm:text-base text-gray-500 font-light hover:text-gray-800 leading-loose'
                                 >{`${opt} ${item.optionSuffix}`}</a>
                                 {i !== item.options.length - 1 && (
                                    <span className='w-[3px] h-[3px] rounded-full bg-gray-500 mx-3'></span>
                                 )}
                              </div>
                           ))}
                        </div>
                     )}
                     {[2, 3].includes(index) && (
                        <div
                           className={`${
                              exploreOptClick[index] ? "flex" : "hidden"
                           } flex-row flex-wrap pt-5 sm:pr-28`}
                        >
                           {item.options.map((opt, i) => (
                              <div key={i} className='flex items-center w-1/2 sm:w-1/5'>
                                 <a
                                    href='#'
                                    className='text-xs sm:text-base text-gray-500 font-light hover:text-gray-800 leading-loose'
                                 >
                                    {opt}
                                 </a>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Explore
