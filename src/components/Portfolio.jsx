import React from 'react';
import {
  clock,
  colorFlipper,
  currencyConvertor,
  destinationSearch,
  imageSearch,
  seatBooking,
} from '../assets';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: clock,
      url: 'https://digital-clock-project-website.netlify.app/',
      code: 'https://github.com/mani636/Digital-clock',
    },
    {
      id: 2,
      src: colorFlipper,
      url: 'https://color-fliping.netlify.app/',
      code: 'https://github.com/mani636/Color-Flipping',
    },
    {
      id: 3,
      src: imageSearch,
      url: 'https://search-image-project.netlify.app/',
      code: 'https://github.com/mani636/image-search-engine',
    },
    {
      id: 4,
      src: seatBooking,
      url: 'https://seat-book-website.netlify.app/',
      code: 'https://github.com/mani636/seat-booking',
    },
    {
      id: 5,
      src: currencyConvertor,
      url: 'https://currency-convertor-website.netlify.app/',
      code: 'https://github.com/mani636/currency-convertor',
    },
    {
      id: 6,
      src: destinationSearch,
      url: 'https://destination-search-project.netlify.app/',
      code: 'https://github.com/mani636/destination-search',
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, url, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt='project-image'
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '
                  href={url}
                >
                  Demo
                </a>
                <a
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  href={code}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
