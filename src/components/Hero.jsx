import 'react';
import "../style/hero.css"
import "../style/herologoticker.css"
import Image1 from '../assets/Visual.svg'; 
import one from '../assets/herologos/one.png'
import two from '../assets/herologos/two.png'
import three from '../assets/herologos/three.png'
import fore from '../assets/herologos/fore.png'
import five from '../assets/herologos/five.png'
import six from '../assets/herologos/six.png'
import { GoArrowRight } from "react-icons/go";


// import herobg from '../assets/Herobg.svg'; 

const Hero = () => {
  return (
    <>
      <section className='your-section-class'>
        <div className="container  mx-auto px-6 py-24 sm:flex items-center justify-between">
          <div className="sm:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">Pathway to productivity</h1>
            <p className="text-xl text-gray-600 mb-8">
              Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes.
            </p>
            <div className="md:flex md:space-x-4">
              <button className="bg-black text-white px-6 py-3 mr-4 mb-4 md:m-0 rounded-lg"> <a href='https://flowcv.me/seenuvasan' target="_blank" rel="noopener noreferrer">Get for free</a></button>
              <button className="text-gray-600 px-6 py-3 rounded-lg border border-gray-300">Learn more <GoArrowRight className='inline' /></button>
            </div>
          </div>
          <div className="sm:w-1/2 items-center">
            <img src={Image1} alt="image 1" />
          </div>
        </div>
      </section>
      <section className='mb-20 mt-5'>
      <div className="logo-ticker">
        <div className="logo-item faded"><img src={one} alt="herologo" /></div>
        <div className="logo-item faded"><img src={two} alt="herologo" /></div>
        <div className="logo-item highlight"><img src={three} alt="herologo" /> </div>
        <div className="logo-item faded"><img src={fore} alt="herologo" /></div>
        <div className="logo-item faded"><img src={five} alt="herologo" /></div>
        <div className="logo-item faded"><img src={six} alt="herologo" /></div>
      </div>
      </section>
    </>
  );
};

export default Hero;
