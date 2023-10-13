import React from 'react';

import me from './images/about/bike4.jpg'
import trail from './images/about/trail.svg'

function About() {
  return (
    <div className='about px-20 min-h-screen bg-orange-50 flex flex-col items-center'>
      <div className='mt-12 flex items-center gap-6 w-full h-full'>
        <div className='bg-black flex-grow h-1' />
        <h1 className='font-SansBold text-6xl'>About Me!</h1>
        <div className='bg-black flex-grow h-1' />
      </div>

      <div className='mt-4 px-8 flex gap-20 w-full'>
        <img src={me} alt="me" draggable='false' className="bg-white p-4 w-1/4 h-64 mt-8 drop-shadow-lg -rotate-12"/>
        <div className='[&>p]:mb-4 font-sans text-base'>
          <p>Hey, I'm Raiyan! I'm a student at the University of Waterloo, where I'm pursuing a degree in Computer Engineering with an expected graduation year of 2027.
             I was originally born in Bangladesh, but I spent my first six years growing up in Kōchi, Japan. In 2011, I moved to Canada, and it's been my home ever since.</p>
          <p>I have experience with programming languages such as C/C++, Python, HTML/CSS, and JavaScript. My technical skills encompass AI/ML tools like TensorFlow, PyTorch, Numpy, and Pandas, and tools/technology like React and Figma for web development.
             I also have experience working in Linux Environments, as all my projects are done in Linux, as well as Git for version control. 
             In addition to my technical skills, I possess valuable soft skills such as leadership, adaptability, problem-solving, fast learning, effective communication, and critical thinking.</p>
          <p>Beyond technology, I'm an active person. I have a deep-seated love for sports like soccer, badminton, and track. These days, I enjoy playing Ultimate Frisbee with friends, biking, and running. I also love playing rhythm games like osu!, SDVX, and Project Sekai, and others that give me a new challenge. I am also currently in love with Moonstone Island.</p>
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='flex'>
          <div className='h-fit mt-16 ml-14 bg-white py-4 px-12 drop-shadow-md rotate-6'>
            <h1 className='text-center text-xl font-sans font-bold'>AI/ML</h1>
            <ul className='list-disc'>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Numpy</li>
              <li>Pandas</li>
            </ul>
          </div>

          <div className='h-fit mt-4 ml-14 bg-white py-4 px-12 drop-shadow-md -rotate-6'>
            <h1 className='text-center text-xl font-sans font-bold'>Web</h1>
            <ul className='list-disc'>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className='h-fit mt-8 ml-14 bg-white py-4 px-12 drop-shadow-md rotate-3'>
            <h1 className='text-center text-xl font-sans font-bold'>Languages</h1>
            <ul className='list-disc'>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C/C++</li>
              <li>ARM Assembly</li>
              <li>SQL (Learning)</li>
            </ul>
          </div>
        </div>
        
        <img src={trail} alt="trail" draggable='false' className="h-auto w-[35rem] rotate-3"/>
      </div>


      
    </div>
  );
}

export default About;
