// *Zomato homePage
import NavBar from '../components/page_00/NavBar'
import Banner from '../components/page_00/Banner'
import Features from '../components/page_00/Features'
import Collections from '../components/page_00/Collections'

const Page_00 = ({ data: { nav, banner, features, collections } }) => {
   return (
      <div className='relative'>
         <NavBar data={nav} />
         <Banner data={banner} />
         <Features data={features} />
         <Collections data={collections} />
      </div>
   )
}

export default Page_00

export const getStaticProps = async () => {
   const res = await fetch(`${process.env.ROOT_URL}/api/page_00`)
   const data = await res.json()

   return { props: { data } }
}
