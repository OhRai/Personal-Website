import github from './images/github.png'

import exercise from './images/exercise.png'
import face from './images/face.png'
import genre from './images/genre.png'

import { motion } from 'framer-motion'

const ML = () => {
  return (  
    <>
      <motion.div className='w-80 rounded-md p-1.5 bg-gradient-to-br from-[#ff9794] to-[#929af3] font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05, opacity: 0.9}} transition={{duration:0.2, ease:"easeInOut"}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col gap-5 justify-between' >
          <div>
              <img src={exercise} className='mb-4 h-auto rounded-lg self-center'/>
              <h2 className='font-SansBold text-2xl'>Exercise App</h2>
              <p className='text-gray-600'>Python, TensorFlow, OpenCV, NumPy</p>
              <p>An exercise app that counts reps for push-ups, squats, and more! Built using Google's MoveNet model and real-time pose detection, which helped create the logic for rep counting.</p>
          </div>
          <div className='flex gap-3'>
              <a href='https://github.com/OhRai/Exercise-App' target='_blank'><img src={github} draggable='false' alt='github' className='h-auto w-5'/></a>
          </div>
        </div>
      </motion.div>

      <motion.div className='w-80 bg-gradient-to-br from-[#ff9794] to-[#929af3] rounded-md p-1.5 font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col justify-between'>
            <div>
                <img src={face} className='mb-4 h-auto rounded-lg self-center'/>
                <h2 className='font-SansBold text-2xl'>Face Tracker App</h2>
                <p className='text-gray-600'>Python, TensorFlow, Keras, NumPy, OpenCV, LabelMe, Albumentations</p>
                <p>A program that can track your face and your eyes! Built using transfer learning on popular models like VGG16 and ResNet152.</p>
            </div>
            <div className='flex gap-3'>
                <a href='https://github.com/OhRai/face-app/' target='_blank'><img src={github} draggable='false' alt='github' className='mt-3 h-auto w-5'/></a>
            </div>
        </div>
      </motion.div>

      <motion.div className='w-80 h-full bg-gradient-to-br from-[#ff9794] to-[#929af3] rounded-md p-1.5 font-SansRegular text-xl drop-shadow-lg' 
      whileHover={{scale:1.05}}>
        <div className='coolbox bg-orange-50 p-3 rounded-md h-full flex flex-col justify-between'>
            <div>
                <img src={genre} className='mb-7 h-auto rounded-lg self-center'/>
                <h2 className='font-SansBold text-2xl'>Music Genre Classifier</h2>
                <p className='text-gray-600'>Python, Tensorflow, Keras, NumPy, Matplotlib</p>
                <p>A program that compares three different types of models on a music genre dataset. A basic one, a CNN, and an LSTM model, all built from scratch using the Keras library.</p>
            </div>
            <div className='flex gap-3'>
                <a href='https://github.com/OhRai/Genre-Classifier/' target='_blank'><img src={github} draggable='false' alt='github' className='h-auto w-5'/></a>
            </div>
        </div>
      </motion.div>
    </>
  );
}
 
export default ML;