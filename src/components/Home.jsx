import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      className=' h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'
      name='home'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white '>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 6 months building and designing software.Currently , I love
            to work on web application using technologies like React, Tailwind,
            Next JS and Graphics
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
          <div className='md:w-full'>
            <img
              // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TG_zsSV4P4fXNGr4uSBoFPUOJg5TxBnFYA&usqp=CAU'
              alt='my profile'
              className='rounded-2xl mx-auto w-2/3 md:w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
