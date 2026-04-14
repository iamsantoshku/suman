import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10 border-t border-gray-800">

      {/* 🌸 TOP */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* 💖 BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-3">
            ❤️ LoveGram
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A place where memories become forever 💫 <br />
            Capture love, share moments, and relive emotions ❤️
          </p>
        </div>

        {/* 🔗 LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Story</li>
            <li className="hover:text-white cursor-pointer">Message</li>
            <li className="hover:text-white cursor-pointer">Proposal</li>
          </ul>
        </div>

        {/* 📞 CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-400">
            Connect With Me 💕
          </h3>

          {/* PHONE */}
          <a
            href="tel:9876543210"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-3"
          >
            <FaPhoneAlt /> +91 7033825186
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-2xl">

            {/* INSTAGRAM */}
            <motion.a
              href="https://www.instagram.com/santosh_chaudhary0055?igsh=MWgwbzJhd2J0eHV4NA=="
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-pink-500 hover:text-white"
            >
              <FaInstagram />
            </motion.a>

             <motion.a
              href="https://www.instagram.com/choaudharyanjay?igsh=OXg2eTF0MDNuNjB0"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-pink-500 hover:text-white"
            >
              <FaInstagram />
            </motion.a>

             <motion.a
              href="https://www.instagram.com/choaudharyanjay?igsh=OXg2eTF0MDNuNjB0"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-pink-500 hover:text-white"
            >
              <FaLinkedin/>
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/956778877"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-green-500 hover:text-white"
            >
              <FaWhatsapp />
            </motion.a>

            

          </div>

          {/* ❤️ HEART ANIMATION */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-3xl mt-4"
          >
            ❤️
          </motion.div>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800"></div>

      {/* ⚡ BOTTOM */}
      <div className="text-center py-4 text-gray-500 text-sm">

        <p>
          © {new Date().getFullYear()} LoveGram 💖 | Made with ❤️ by Santosh
        </p>

        <motion.p
          className="mt-1 text-pink-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Forever Together 💍
        </motion.p>

      </div>

    </footer>
  );
};

export default Footer;