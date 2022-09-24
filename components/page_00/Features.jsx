import Image from "next/image"

const Features = ({ data }) => {
   return (
      <section className='md:container sm:max-w-full mx-auto flex flex-row justify-center space-x-5 px-8 py-5 xl:py-8'>
         {data.map((item, index) => (
            <div
               key={index}
               className='flex flex-col w-1/2 h-[160px] md:h-[200px]  xl:h-[250px] rounded-xl border border-gray-200 hover:scale-105 transition-transform cursor-pointer'
            >
               {/* image */}
               <div className='flex-1 relative'>
                  <Image
                     src={item.img}
                     alt={`feature-${index + 1}`}
                     layout='fill'
                     objectFit='cover'
                     className='rounded-t-xl'
                  />
               </div>
               {/* text */}
               <div className='flex flex-col p-3'>
                  <p className='text-sm xl:text-lg text-black'>{item.title}</p>
                  <p className='text-sm xl:text-lg text-gray-600 font-light truncate '>{item.desc}</p>
               </div>
            </div>
         ))}
      </section>
   )
}
export default Features
