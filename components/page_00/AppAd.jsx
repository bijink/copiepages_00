import Image from "next/image"

const AppAd = ({ data }) => {
   return (
      <section className='bg-orange-50 py-12'>
         {/* container */}
         <div className='md:container mx-auto px-10 md:px-0 lg:px-44 py-12'>
            <div className='flex flex-row'>
               {/* left */}
               <div className='hidden sm:block w-2/5'>
                  <Image src={data.adImg} alt='' width={250} height={300} />
               </div>
               {/* right */}
               <div className='md:w-3/5 '>
                  <h4 className='text-xl sm:text-4xl font-medium pb-6'>{data.sectionTitle}</h4>
                  <p className='font-light text-gray-700'>{data.instruction}</p>
                  {/* input-radio */}
                  <div className='flex flex-col space-y-2 py-8'>
                     <div className='flex space-x-14'>
                        <div className='flex items-center form-check hover:cursor-pointer'>
                           <input
                              className='form-check-input appearance-none rounded-full h-[19px] w-[19px] border border-gray-400 bg-white hover:border-red-400 checked:border-red-400 checked:bg-red-400 checked:shadow-radio focus:outline-none  cursor-pointer'
                              type='radio'
                              name='shareAppLinkOpt'
                              id='email'
                              // checked
                              defaultChecked
                           />
                           <label
                              className='form-check-label inline-block text-gray-800 hover:cursor-pointer pl-2'
                              htmlFor='email'
                           >
                              Email
                           </label>
                        </div>
                        <div className='flex items-center form-check hover:cursor-pointer'>
                           <input
                              className='form-check-input appearance-none rounded-full h-[19px] w-[19px] border border-gray-400 bg-white hover:border-red-400 checked:border-red-400 checked:bg-red-400 checked:shadow-radio focus:outline-none  cursor-pointer'
                              type='radio'
                              name='shareAppLinkOpt'
                              id='phone'
                           />
                           <label
                              className='form-check-label inline-block text-gray-800 hover:cursor-pointer pl-2'
                              htmlFor='phone'
                           >
                              Phone
                           </label>
                        </div>
                     </div>
                     {/* input-text */}
                     <div className='flex space-x-2'>
                        <input
                           type='text'
                           className='w-4/5 md:w-2/3 border border-gray-300 rounded-md p-[10px] flex-1 text-lg font-light focus:outline-none'
                           placeholder={"Email"}
                        />
                        <button className='hidden md:block w-1/3 bg-red-400 hover:bg-red-500 rounded-md text-white'>
                           {data.submitBtnName}
                        </button>
                        <button className='block md:hidden w-1/5 bg-red-400 hover:bg-red-500 rounded-md text-white'>
                           {data.submitBtnName.slice(0, 5)}
                        </button>
                     </div>
                  </div>
                  {/* mobileAppLink */}
                  <p className='text-sm font-light text-gray-500'>Download app from</p>
                  <div className='flex space-x-5 pt-4'>
                     {data.mobileAppLinkImg.map((item, index) => (
                        <a key={index} href='#' className=''>
                           <Image src={item.img} alt={item.alt} width={120} height={35} />
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AppAd
