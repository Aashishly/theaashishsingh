import React from 'react';
import Hero from '../components/Hero'; 
import About from './About';
import Project from './Project';
import Blog from './Blog';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Project/>
        {/* <Blog/> */}
        <Footer/>
    </div>
  )
}

export default Home;