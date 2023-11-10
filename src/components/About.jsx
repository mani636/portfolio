import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          ⚡I have completed my Bachelor Degree in Dr.N.G.P Arts and Science
          College and am an aspiring Front End developer. <br /> <br />
          ⚡I have a deep understanding of various web technologies such as{' '}
          <b>HTML, CSS, JavaScript and React JS</b>.<br />
        </p>
        <br />
        <p className='text-xl'>
          ⚡I am dedicated to keeping up with the latest trends and techniques
          in web development, and I am constantly learning and expanding my
          skill set. I have a keen eye for detail and strive for perfection in
          every project I work on. <br />
          <br />
          ⚡It is not my job, but also my passion.I have being able to learn
          something everyday by engaging in experiments and working on projects.
        </p>
      </div>
    </div>
  );
};

export default About;
