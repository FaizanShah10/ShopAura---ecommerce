import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import TrendingProducts from '../components/TrendingProducts'
import Deal from '../components/Deal'
import PromoBanner from '../components/PromoBanner'
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Trending/>
        <TrendingProducts/>
        <Deal/>
        <PromoBanner/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home