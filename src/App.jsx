import React, {useState, useRef} from 'react'
import PreLoader from './components/Preloader'
import AnimatedCursor from "react-animated-cursor"
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ProjectPage from './pages/Project';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import useScrollSnap from "react-use-scroll-snap";
import WorkinProgress from './components/WorkinProgress';


const App = () => {

  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 100 });
  
  return (
    <BrowserRouter>
    <PreLoader/>
    <AnimatedCursor innerSize={15} outerSize={15} color='255, 181, 52' outerAlpha={0.2} innerScale={0.7} outerScale={10} clickables={[   'a',   'input[type="text"]',   'input[type="email"]',   'input[type="number"]',   'input[type="submit"]',   'input[type="image"]',   'label[for]',   'select',   'textarea',   'button',   '.link' ]} />
      {/* <Header/> */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<WorkinProgress/>} />
          <Route path="/project" element={<WorkinProgress />} />
          <Route path="/blog" element={<WorkinProgress />} />
          <Route path="/contact" element={<WorkinProgress />} />
          <Route path='/building' element={<WorkinProgress/>} />
      </Routes>
      {/* <Footer/> */}
    <div ref={scrollRef}>
    </div>
    </BrowserRouter>
  )
}

export default App