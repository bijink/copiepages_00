import { ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"

const Localities = ({ data }) => {
   const router = useRouter()

   const [arr, setArr] = useState([])
   const [seeMoreClick, setSeeMoreClick] = useState(false)

   useEffect(() => {
      let limit = 20
      if (arr.length < limit) {
         for (let i = 1; i <= limit; i++) {
            setArr([...arr, ~~(Math.random() * 10 * i)])
         }
      }
   }, [arr])

   return (
      <section className='container mx-auto px-10 py-28'>
         <h4 className='text-xl sm:text-3xl font-medium pb-6'>{data.sectionTitle}</h4>
         <div className='grid grid-cols-1 gap-3 md:gap-5 md:grid-cols-3'>
            {(seeMoreClick ? arr : arr.slice(0, 8)).map((value, index) => (
               <div
                  key={index}
                  className='flex justify-between p-3 border rounded-lg cursor-pointer shadow-sm hover:shadow-down'
                  onClick={() => router.push("/page_00")}
               >
                  <div className='flex flex-col'>
                     <p className='text-lg'>{`Lorem ${index + 1}`}</p>
                     <p className='font-light text-gray-500'>{`${value} places`}</p>
                  </div>
                  <ChevronRightIcon className='w-4' />
               </div>
            ))}
            <div
               className='flex flex-row justify-center items-center space-x-2 p-6 border rounded-lg cursor-pointer shadow-sm'
               onClick={() => setSeeMoreClick(prev => !prev)}
            >
               <p className='text-lg'>{seeMoreClick ? "see less" : "see more"}</p>
               {seeMoreClick ? <ChevronUpIcon className='w-5' /> : <ChevronDownIcon className='w-5' />}
            </div>
         </div>
      </section>
   )
}

export default Localities
