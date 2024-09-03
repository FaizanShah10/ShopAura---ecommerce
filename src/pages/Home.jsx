import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import TrendingProducts from '../components/TrendingProducts'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Trending/>
        <TrendingProducts/>
    </div>
  )
}

export default Home