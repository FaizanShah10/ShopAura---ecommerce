import React, { useEffect, useRef } from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Homepagecomponents/Categories';
import Trending from '../components/Homepagecomponents/Trending';
import TrendingProducts from '../components/Homepagecomponents/TrendingProducts';
import Deal from '../components/Homepagecomponents/Deal';
import PromoBanner from '../components/Homepagecomponents/PromoBanner';
import Blogs from "../components/Homepagecomponents/Blogs";
import Footer from "../components/Footer";
import locomotiveScroll from "locomotive-scroll";

const Home = () => {
 


  return (
    <div>
      <Banner />
      <Categories />
      <Trending />
      <TrendingProducts />
      <Deal />
      <PromoBanner />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
