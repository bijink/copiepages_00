// *Zomato homePage
import NavBar from "../components/page_00/NavBar"
import Banner from "../components/page_00/Banner"
import Features from "../components/page_00/Features"
import Collections from "../components/page_00/Collections"
import Footer from "../components/page_00/Footer"
import Explore from "../components/page_00/Explore"
import Localities from "../components/page_00/Localities"

const Page_00 = ({ data: { nav, banner, features, collections, localities, explore, footer } }) => {
   return (
      <div className='relative'>
         <NavBar data={nav} />
         <Banner data={banner} />
         <Features data={features} />
         <Collections data={collections} />
         <Localities data={localities} />
         <Explore data={explore} />
         <Footer data={footer} />
      </div>
   )
}

export default Page_00

export const getStaticProps = async () => {
   const res = await fetch(`${process.env.ROOT_URL}/api/page_00`)
   const data = await res.json()

   return { props: { data } }
}
