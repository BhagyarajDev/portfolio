import React from 'react';
import image from '../../src/logo.png';

const Project = () => {
  return (
    <div className="min-h-screen w-screen bg-black py-8">
      <h1 className='text-yellow-400 text-[50px] md:text-[100px] text-center bebas-neue-regular border border-t-0 border-r-0 border-l-0 shadow-xl shadow-emerald-600 mb-8'>
        Project
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <div className="hover:shadow-xl  transition delay-100 ease-in-out text-yellow-400 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <img
            src={image}
            alt="Project"
            className="w-full h-48 object-contain mb-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
          />
          <div className="text-center">
            <span className="block mb-4 text-lg md:text-xl">Content</span>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                GitHub
              </button>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                Site
              </button>
            </div>
          </div>
        </div>
        <div className="hover:shadow-xl  transition delay-100 ease-in-out text-yellow-400 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <img
            src={image}
            alt="Project"
            className="w-full h-48 object-contain mb-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
          />
          <div className="text-center">
            <span className="block mb-4 text-lg md:text-xl">Content</span>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                GitHub
              </button>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                Site
              </button>
            </div>
          </div>
        </div>
        <div className="hover:shadow-xl  transition delay-100 ease-in-out text-yellow-400 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <img
            src={image}
            alt="Project"
            className="w-full h-48 object-contain mb-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
          />
          <div className="text-center">
            <span className="block mb-4 text-lg md:text-xl">Content</span>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                GitHub
              </button>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                Site
              </button>
            </div>
          </div>
        </div>
        <div className="hover:shadow-xl  transition delay-100 ease-in-out text-yellow-400 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <img
            src={image}
            alt="Project"
            className="w-full h-48 object-contain mb-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
          />
          <div className="text-center">
            <span className="block mb-4 text-lg md:text-xl">Content</span>
            <div className="flex justify-center space-x-4">
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                GitHub
              </button>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded shadow">
                Site
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
