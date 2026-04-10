
import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";



const Home = () => {


    useEffect(() => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91 });
  fire(0.1, { spread: 120, startVelocity: 25 });
  fire(0.1, { spread: 120 });
}, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/her8.jpeg')] bg-cover bg-center opacity-60"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

        {/* TOP NAME */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-extrabold name-text"
        >
          SANTOSH
        </motion.h1>

        {/* HEART IMAGE */}
        {/* <motion.img
          src="/images/her1.jpeg"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-pink-400 shadow-xl my-6 animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        /> */}

        {/* WEDS */}
        <h2 className="text-3xl md:text-5xl font-bold text-pink-400 my-4">
          ❤️ WEDS ❤️
        </h2>

        <p className="mt-6 text-lg md:text-2xl text-pink-200">
          💖 For My Love 💖 <br />
          You are my happiness ❤️
        </p>

        {/* SECOND IMAGE */}
        {/* <motion.img
          src="/images/her2.jpeg"
          className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-pink-400 shadow-xl my-6 animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        /> */}



         <motion.img
          src="/images/her1.jpeg"
          className="w-32 h-34md:w-40 md:h-40 rounded-full border-4 border-pink-400 shadow-xl my-6 animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />

        {/* BOTTOM NAME */}
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-extrabold name-text"
        >
          SUMAN
        </motion.h1>

        {/* LOVE TEXT */}
        
      </div>

      {/* FLOATING HEART */}
      <div className="absolute bottom-20 right-10 animate-bounce text-4xl">
        ❤️
      </div>

    </div>
  );
};

export default Home;