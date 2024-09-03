import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import TrendingProducts from '../components/TrendingProducts'
import Deal from '../components/Deal'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Trending/>
        <TrendingProducts/>
        <Deal/>
    </div>
  )
}

export default Home