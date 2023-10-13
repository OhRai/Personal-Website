import personal from './images/personal.png'
import weather from './images/weather.png'
import todo from './images/todo.png'

import github from './images/github.png'
import link from './images/link.png'

import { motion } from 'framer-motion'

const Front = () => {

  return ( 
    <>
      <motion.div className='w-80 rounded-md p-1.5 bg-gradient-to-br from-[#ff9794] to-[#929af3] font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05, opacity: 0.9}} transition={{duration:0.2, ease:"easeInOut"}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col gap-5 justify-between' >
          <div>
              <img src={personal} className='mb-4 h-auto rounded-lg self-center' draggable='false'/>
              <h2 className='font-SansBold text-2xl'>Personal Website</h2>
              <p className='text-gray-600'>JavaScript, React.js, TailwindCSS, Figma</p>
              <p>My personal portfolio website that not only showcases my projects but also my front-end skills.</p>
          </div>
          <div className='flex gap-3'>
              <a href='https://github.com/OhRai/Personal-Website' target='_blank'>
                <img src={github} draggable='false' alt='github' className='h-auto w-5'/>
              </a>
              <a href='https://raiyansamin.me' target='_blank'>
                <img src={link} draggable='false' alt='link' className='h-auto w-5'/>
              </a>
          </div>
        </div>
      </motion.div>

      <motion.div className='w-80 bg-gradient-to-br from-[#ff9794] to-[#929af3] rounded-md p-1.5 font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col justify-between'>
            <div>
                <img src={weather} className='mb-4 h-auto rounded-lg self-center' draggable='false'/>
                <h2 className='font-SansBold text-2xl'>Weather App</h2>
                <p className='text-gray-600'>JavaScript, React.js, TailwindCSS, API</p>
                <p>A weather app made using real-time geolocation and OpenWeatherAPI data. Features a clean and sleek design that is easy to read.</p>
            </div>
            <div className='mt-3 flex gap-3 '>
                <a href='https://github.com/OhRai/Weather-App' target='_blank'>
                  <img src={github} draggable='false' alt='github' className='h-auto w-5'/>
                </a>
                <a href='https://weather-app-ohrai.vercel.app/' target='_blank'>
                  <img src={link} draggable='false' alt='link' className='h-auto w-5'/>
                </a>
            </div>
        </div>
      </motion.div>

      <motion.div className='w-80 h-full bg-gradient-to-br from-[#ff9794] to-[#929af3] rounded-md p-1.5 font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col justify-between'>
            <div>
                <img src={todo} className='mb-4 h-auto rounded-lg self-center' draggable='false'/>
                <h2 className='font-SansBold text-2xl'>ToDo App</h2>
                <p className='text-gray-600'>JavaScript, React.js, TailwindCSS, JSON Server</p>
                <p>A ToDo app that has the functionality of creating and deleting todos. Has a clean UI and is very user friendly.</p>
            </div>
            <div className='flex gap-3'>
                <a href='https://github.com/OhRai/ToDo-App' target='_blank'>
                  <img src={github} draggable='false' alt='github' className='h-auto w-5'/>
                </a>
                <a href='https://todo-ohrai.vercel.app/' target='_blank'>
                  <img src={link} draggable='false' alt='link' className='h-auto w-5'/>
                </a>
            </div>
        </div>
      </motion.div>
    </>
  );
}
 
export default Front;