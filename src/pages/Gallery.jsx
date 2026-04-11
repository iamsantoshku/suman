import React from 'react'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AddGallery from '../components/AddGallery';


const images = [
 "/images/her1.jpeg",
  "/images/her2.jpeg",
  "/images/her3.jpeg",
  "/images/her4.jpeg",
  "/images/her5.jpeg",
  "/images/her6.jpeg",
  "/images/her7.jpeg",
];

const Gallery = () => {

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div>Gallery</div>
    // min-h-screen 

    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        For My Love ❤️
      </motion.h1>

      <motion.div
        key={index}
        className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='h-[500px]'>
            <img 
          src={images[index]}
          alt="romantic"
          className="w-full h-[700px] object-cover"
        />

        </div>
        
      </motion.div>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-700 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Every moment with you is special. This gallery is just a small way to show how much you mean to me ❤️
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert("I Love You ❤️")}
      >
        Click Me 💖
      </motion.button>

       <AddGallery/>
    </div>

   

  )
}

export default Gallery





