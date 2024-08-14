import React, { useEffect } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import gsap from 'gsap';
import image from '../preview (1).webp';
import './Home.css';

const Home = () => {
    useEffect(() => {
        gsap.to('.navbar', {
            opacity: 1,
            duration: 1,
            delay: 0.8,
            y: 0,
        });
        gsap.to('.hello', {
            opacity: 1,
            duration: 1,
            delay: 0.8,
            x: 0,
        });
        gsap.to('.image', {
            opacity: 1,
            duration: 1,
            delay: 0.8,
            y: 0,
        });
    }, []);

    return (
        <header className='h-full w-screen'>
            <nav className='flex justify-between p-2 navbar text-yellow-400 opacity-0 translate-y-[100px] border-b border-yellow-400'>
                <h1 className='text-[30px] md:text-[50px] border-b-0 p-1'>BH</h1>
                <button>
                    <IoReorderThreeOutline size={30}  />
                </button>
            </nav>
            <div className='flex flex-col md:flex-row items-center sm:flex-wrap justify-around h-full py-8 md:h-[600px]'>
                <div className='hello opacity-0 translate-x-[-100px] bebas-neue-regular leading-tight md:leading-[90px] text-center md:text-left'>
                    <h2 className='text-[50px] md:text-[100px] text-yellow-400 italic'>I AM</h2>
                    <h1 className='text-[50px] md:text-[100px] text-yellow-400 italic'>BHAGYARAJ</h1>
                    <h1 className='text-[30px] md:text-[100px] text-yellow-400 italic'>FRONT-END DEVELOPER</h1>
                    <button className='mt-4 hover:text-white text-yellow-400'>Download CV</button>
                </div>
                <div className='image ring ring-yellow-500 opacity-0 translate-y-[100px] mt-8 md:mt-0'>
                    <img height={300} width={300}  src={image} alt="Bhagyraj" />
                </div>
            </div>
        </header>
    );
}

export default Home;
