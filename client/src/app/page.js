import Image from "next/image";
import HomeNavbar from '../components/HomeNavbar'
import Products from '../components/Products.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
export default function Home() {
  return (
    <main className="">
     <HomeNavbar/>
     <Banner/>
     <Products/>
     <Footer/>
    </main>
  );
}
