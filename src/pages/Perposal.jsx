

// import { useState } from "react";
// import { motion } from "framer-motion";

// const santosh = "/images/her6.jpeg";
// const muskanImg = "/images/her2.jpeg";

// const Perposal = () => {
//   const [accepted, setAccepted] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const moveNoButton = () => {
//     const isMobile = window.innerWidth < 768;

//     const moveRangeX = isMobile
//       ? window.innerWidth * 0.8
//       : window.innerWidth * 0.4;

//     const moveRangeY = isMobile
//       ? window.innerHeight * 0.6
//       : window.innerHeight * 0.3;

//     const x = Math.random() * moveRangeX - moveRangeX / 2;
//     const y = Math.random() * moveRangeY - moveRangeY / 2;

//     setPosition({ x, y });
//   };

//   /* ✅ SUCCESS PAGE */
//   if (accepted) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-center p-6">

//         <motion.h1
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           className="text-4xl md:text-6xl font-bold text-green-300 mb-8"
//         >
//           💍 She Said YES ❤️
//         </motion.h1>

//         <div className="flex flex-wrap items-center justify-center gap-8">

//           <motion.img
//             src={santosh}
//             className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl"
//             initial={{ x: -200, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//           />

//           <motion.div
//             animate={{ scale: [1, 1.3, 1] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="text-5xl"
//           >
//             ❤️
//           </motion.div>

//           <motion.img
//             src={muskanImg}
//             className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl"
//             initial={{ x: 200, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//           />
//         </div>

//         <p className="mt-8 text-lg md:text-2xl max-w-xl leading-relaxed">
//           दो दिल ❤️ एक जान ✨ <br />
//           आज से नहीं... हमेशा से तुम मेरी हो 💕 <br />
//           अब हमारी जिंदगी शुरू हो रही है 💍 <br />
//           I Love You Suman 🌹🌹🌹
//         </p>
//       </div>
//     );
//   }

//   /* ✅ PROPOSAL PAGE */
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white text-center p-6 overflow-hidden">

//       <motion.h1
//         initial={{ y: -200 }}
//         animate={{ y: 0 }}
//         className="text-3xl md:text-5xl font-bold mb-6"
//       >
//         💖 Will You Be My Wife Suman? 💖
//       </motion.h1>

//       <p className="text-lg md:text-xl max-w-xl">
//         From the moment I met you,<br />
//         my world became beautiful 🌸<br />
//         My happiness begins with you ❤️💖
//       </p>

//       <div className="flex gap-6 mt-10 flex-wrap justify-center">

//         {/* YES BUTTON */}
//         <motion.button
//           whileHover={{ scale: 1.2 }}
//           onClick={() => setAccepted(true)}
//           className="px-8 py-3 bg-red-500 rounded-full text-white text-lg shadow-lg"
//         >
//           YES ❤️
//         </motion.button>

//         {/* NO BUTTON */}
//         <motion.button
//           animate={{ x: position.x, y: position.y }}
//           transition={{ type: "spring", stiffness: 300 }}
//           onMouseEnter={moveNoButton}
//           onTouchStart={moveNoButton}
//           onClick={(e) => {
//             e.preventDefault();
//             moveNoButton();
//           }}
//           className="px-8 py-3 bg-white text-black rounded-full text-lg shadow-lg"
//         >
//           NO 😅
//         </motion.button>

//       </div>
//     </div>
//   );
// };

// export default Perposal;






import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const santosh = "/images/her6.jpeg";
const muskanImg = "/images/her2.jpeg";

const Perposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* 🎆 FIREWORK FUNCTION */
  const fireExplosion = () => {

    // CENTER BLAST 💥
    confetti({
      particleCount: 200,
      spread: 120,
      startVelocity: 60,
      origin: { x: 0.5, y: 0.5 },
    });

    // LEFT SIDE 🎇
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.5 },
    });

    // RIGHT SIDE 🎇
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.5 },
    });

    // TOP BURST 🎆
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { x: 0.5, y: 0 },
    });

    // MULTIPLE SMALL BURSTS 💫
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);

      confetti({
        particleCount: 30,
        spread: 70,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 200);
  };

  /* 😅 MOVE NO BUTTON */
  const moveNoButton = () => {
    const isMobile = window.innerWidth < 768;

    const moveRangeX = isMobile
      ? window.innerWidth * 0.8
      : window.innerWidth * 0.4;

    const moveRangeY = isMobile
      ? window.innerHeight * 0.6
      : window.innerHeight * 0.3;

    const x = Math.random() * moveRangeX - moveRangeX / 2;
    const y = Math.random() * moveRangeY - moveRangeY / 2;

    setPosition({ x, y });
  };

  /* 💍 SUCCESS PAGE */
  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 text-white text-center p-6">

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl md:text-6xl font-bold text-green-300 mb-8"
        >
          💍 She Said YES ❤️
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-8">

          <motion.img
            src={santosh}
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />

          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-6xl"
          >
            ❤️
          </motion.div>

          <motion.img
            src={muskanImg}
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-xl"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />
        </div>

        <p className="mt-8 text-lg md:text-2xl max-w-xl leading-relaxed">
          दो दिल ❤️ एक जान ✨ <br />
          आज से नहीं... हमेशा से तुम मेरी हो 💕 <br />
          अब हमारी जिंदगी शुरू हो रही है 💍 <br />
          I Love You Suman 🌹🌹🌹
        </p>
      </div>
    );
  }

  /* 💖 PROPOSAL PAGE */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white text-center p-6 overflow-hidden">

      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        💖 Will You Be My Wife Suman? 💖
      </motion.h1>

      <p className="text-lg md:text-xl max-w-xl">
        From the moment I met you,<br />
        my world became beautiful 🌸<br />
        My happiness begins with you ❤️💖
      </p>

      <div className="flex gap-6 mt-10 flex-wrap justify-center">

        {/* YES BUTTON */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            fireExplosion();  // 🎆 FIREWORK
            setAccepted(true);
          }}
          className="px-8 py-3 bg-red-500 rounded-full text-white text-lg shadow-lg"
        >
          YES ❤️
        </motion.button>

        {/* NO BUTTON */}
        <motion.button
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={(e) => {
            e.preventDefault();
            moveNoButton();
          }}
          className="px-8 py-3 bg-white text-black rounded-full text-lg shadow-lg"
        >
          NO 😅
        </motion.button>

      </div>
    </div>
  );
};

export default Perposal;