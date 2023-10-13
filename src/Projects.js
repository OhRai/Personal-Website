import Front from './Front';
import ML from './ML';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [change, setChange] = useState(false);
  const [lr, setLR] = useState(false);

  return (
    <div className="projects min-h-screen bg-[#FFEBE1] flex flex-col items-center">
      <div className="mb-14 flex items-center">
        <motion.h1 className="mt-20 text-6xl font-SansBold"
        key={change ? 'ml' : 'front'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.25, type: 'spring' }}
        >
          {change ? 'AI/ML Projects' : 'Front End Projects'}
        </motion.h1>
      </div>

      <div className="flex justify-center gap-14">
        <motion.button
          onClick={() => {setChange(!change); setLR(true);}}
          whileHover={{ scale: 1.15 }}
          initial={{ opacity: 0.7 }}
          whileTap={{ scale: 0.8, opacity: 0.4, outline: 'none' }}
          exit={{ opacity: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-auto w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </motion.button>
        <motion.div
          className="grid grid-cols-3 gap-12"
          key={change ? 'ml' : 'front'}
          initial={{ opacity: 0, x: lr ? '-100vw' : '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: lr ? '100vw' : '-100vw' }}
          transition={{ duration: 1.25, type: 'spring' }}
        >
          {change ? <ML /> : <Front />}
        </motion.div>
        <motion.button
          onClick={() => {setChange(!change); setLR(false);}}
          whileHover={{ scale: 1.15 }}
          initial={{ opacity: 0.7 }}
          whileTap={{ scale: 0.8, opacity: 0.4, outline: 'none' }}
          exit={{ opacity: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-auto w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
