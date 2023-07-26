import React from 'react';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import javascript from '../assets/JAVASCRIPT.png';
import reactImage from '../assets/REACT.png';
import tailwind from '../assets/TAILWIND.png';
import github from '../assets/GITHUB.png';

const Skills = () => {
  const images = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500',
    },
    {
      id: 6,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
  ];

  return (
    <div
      name='skills'
      className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Skills
          </p>
          <p className='py-6'>There are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {images.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
