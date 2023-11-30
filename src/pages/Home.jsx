import React from 'react'
import MainBanner from '../components/Banner/MainBanner/MainBanner'
import BestProducts from '../components/BestProducts/BestProducts'
import Blog from '../components/Blog/Blog'
import Category from '../components/Category/Category'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Testimonial from '../components/Testimonial/Testimonial'
import Videos from '../components/Videos/Videos'

const Home = () => {
  return (
    <main>
        <Navbar/>
        <MainBanner/>
        <Category/>
        <Videos/>
        <BestProducts/>
        <Newsletter/>
        <Testimonial/>
        <Blog/>
        <Footer/>
    </main>
  )
}

export default Home