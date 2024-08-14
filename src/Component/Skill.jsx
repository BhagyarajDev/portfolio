import React, { useEffect } from 'react';
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import './Home.css';
import gsap from 'gsap';

const Skill = () => {

  useEffect(() => {
    gsap.to('.icon', {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: 0.2
    });
  }, []);

  return (
    <div className='text-yellow-400 bg-black min-h-screen w-screen py-8'>
      <h1 className='text-yellow-400 text-[50px] md:text-[100px] text-center bebas-neue-regular border border-t-0 border-r-0 border-l-0 shadow-xl shadow-emerald-600 mb-8'>
        Skill
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-6 p-6'>
        <div className='flex flex-col items-center p-4 max-w-xs'>
          <FaHtml5 className='text-teal-500 h-[80px] w-[80px] md:h-[100px] md:w-[100px] mb-4 icon -translate-y-[100%] opacity-0' />
          <p className='text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam quia, cupiditate esse quisquam ipsam architecto voluptate eius necessitatibus fuga officia porro dolores reiciendis earum maiores facere voluptates explicabo magnam?</p>
        </div>
        <div className='flex flex-col items-center p-4 max-w-xs'>
          <FaCss3 className='text-teal-500 h-[80px] w-[80px] md:h-[100px] md:w-[100px] mb-4 icon -translate-y-[100%] opacity-0' />
          <p className='text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam quia, cupiditate esse quisquam ipsam architecto voluptate eius necessitatibus fuga officia porro dolores reiciendis earum maiores facere voluptates explicabo magnam?</p>
        </div>
        <div className='flex flex-col items-center p-4 max-w-xs'>
          <IoLogoJavascript className='text-teal-500 h-[80px] w-[80px] md:h-[100px] md:w-[100px] mb-4 icon -translate-y-[100%] opacity-0' />
          <p className='text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam quia, cupiditate esse quisquam ipsam architecto voluptate eius necessitatibus fuga officia porro dolores reiciendis earum maiores facere voluptates explicabo magnam?</p>
        </div>
        <div className='flex flex-col items-center p-4 max-w-xs'>
          <FaReact className='text-teal-500 h-[80px] w-[80px] md:h-[100px] md:w-[100px] mb-4 icon -translate-y-[100%] opacity-0' />
          <p className='text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam quia, cupiditate esse quisquam ipsam architecto voluptate eius necessitatibus fuga officia porro dolores reiciendis earum maiores facere voluptates explicabo magnam?</p>
        </div>
        <div className='flex flex-col items-center p-4 max-w-xs'>
          <SiRedux className='text-teal-500 h-[80px] w-[80px] md:h-[100px] md:w-[100px] mb-4 icon -translate-y-[100%] opacity-0' />
          <p className='text-center text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam quia, cupiditate esse quisquam ipsam architecto voluptate eius necessitatibus fuga officia porro dolores reiciendis earum maiores facere voluptates explicabo magnam?</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
