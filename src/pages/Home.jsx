import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Trending/>
    </div>
  )
}

export default Home