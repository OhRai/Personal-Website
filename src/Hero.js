import me from './images/me.jpeg'; 

import one from './images/shapes/1.svg'; // filled circle
import two from './images/shapes/2.svg'; // hollow circle
import three from './images/shapes/3.svg'; // filled triangle
import four from './images/shapes/4.svg'; // hollow triangle
import five from './images/shapes/5.svg'; // filled square
import six from './images/shapes/6.svg'; // hollow square

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const viewWidth = 1536;
    const viewHeight = 707;

    const mulX = window.innerWidth / viewWidth;
    const mulY = window.innerHeight / viewHeight;
    const mulSize = mulX * 0.8;

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [1, 0], ["0%", "60%"]);
    const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);

    const onePos = [
        { x: 40 * mulX, y: 45 * mulY, size: 200 * mulSize },
        { x: 1000 * mulX, y: 205 * mulY, size: 375 * mulSize },
    ];

    const twoPos = [
        { x: -100 * mulX, y: 380 * mulY, size: 300 * mulSize },
        { x: 1400 * mulX, y: 5 * mulY, size: 250 * mulSize },
    ];

    const threePos = [
        { x: 375 * mulX, y: 20 * mulY, size: 100 * mulSize, rotation: -20 },
        { x: 1400 * mulX, y: 475 * mulY, size: 125 * mulSize, rotation: 30 },
    ];

    const fourPos = [
        { x: 100 * mulX, y: 325 * mulY, size: 150 * mulSize, rotation: 170 },
        { x: 850 * mulX, y: 175 * mulY, size: 100 * mulSize, rotation: 18 },
    ];

    const fivePos = [
        { x: 400 * mulX, y: 520 * mulY, size: 150 * mulSize, rotation: 13 },
        { x: 750 * mulX, y: 25 * mulY, size: 125 * mulSize, rotation: -11 },
    ];

    const sixPos = [
        { x: 30 * mulX, y: 45 * mulY, size: 100 * mulSize, rotation: -60 },
        { x: 1100 * mulX, y: 125 * mulY, size: 230 * mulSize, rotation: -13 },
    ];
    
    return (  
        <div ref={ref} className='bg-[#E4E5F1] min-h-screen max-w-full flex flex-col justify-center items-center z-10'>
            <div className="flex justify-center items-center z-10">
                <div className="max-w-screen-sm">
                    <h1 className="font-SansBold text-7xl">Hey, I'm Raiyan 👋</h1>
                    <p className="font-SansRegular text-5xl leading-tight">
                        I'm a 2nd Year Computer Engineering Student at UWaterloo who is passionate about AI/ML and Web Development!
                    </p>
                </div>
                <div>
                    <img src={me} alt="Raiyan" className="w-52 rounded-full" draggable='false'/>
                </div>
            </div>

            <div className='mt-10 flex gap-10 z-10'>
                <h2>Github</h2>
                <h2>LinkedIn</h2>
                <h2>Resume</h2>
                <h2>Email</h2>
            </div>
            {onePos.map((position, index) => (
                <motion.img key={index} src={one} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
            {twoPos.map((position, index) => (
                <motion.img key={index} src={two} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
            {threePos.map((position, index) => (
                <motion.img animate={{ rotate: position.rotation }} key={index} src={three} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
            {fourPos.map((position, index) => (
                <motion.img animate={{rotate: position.rotation }} key={index} src={four} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
            {fivePos.map((position, index) => (
                <motion.img animate={{ rotate: position.rotation }} key={index} src={five} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
            {sixPos.map((position, index) => (
                <motion.img animate={{ rotate: position.rotation }} key={index} src={six} alt="svg" draggable='false' className="absolute" style={{ opacity: opacity, y: backgroundY, left: position.x, top: position.y, width: position.size, height: position.size }} />
            ))}
        </div>
    );
}
 
export default Hero;