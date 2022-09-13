// *Zomato homePage
import NavBar from '../components/page_00/NavBar'
import Banner from '../components/page_00/Banner'

const Page_00 = ({ data: { nav, banner } }) => {
   return (
      <div className='relative'>
         <NavBar data={nav} />
         <Banner data={banner} />

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
