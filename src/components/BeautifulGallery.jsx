import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDocs, doc, updateDoc } from "firebase/firestore";
import { db, galleryRef } from "../firebase";

const BeautifulGallery = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  /* 🔥 FETCH DATA */
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await getDocs(galleryRef);
    const result = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setImages(result);
  };

  /* ❤️ LIKE */
  const handleLike = async (img) => {
    const ref = doc(db, "gallery", img.id);
    await updateDoc(ref, {
      likes: (img.likes || 0) + 1,
    });
    fetchImages();
  };

  /* ⬇️ DOWNLOAD */
  const downloadMedia = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "memory";
    link.click();
  };

  /* 🔄 NEXT / PREV */
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-pink-100 text-white p-4 ">

      {/* 🔝 TITLE */}
      <h1 className="text-3xl md:text-5xl mt-10 text-center font-bold mb-6 text-pink-400">
        💖 Our Beautiful Gallery 💖
      </h1>

      {/* 🧩 MASONRY GRID */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-3" >

        {images.map((img, index) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.03 }}
            className="relative cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            {img.type === "video" ? (
              <video
                src={img.url}
                className="w-full rounded-xl"
              />
            ) : (
              <img
                src={img.url}
                className="w-full rounded-xl"
              />
            )}

            {/* ❤️ OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 rounded-xl transition">

              <p className="text-sm font-semibold">
                {img.user}
              </p>

              <p className="text-xs text-gray-300">
                {img.caption}
              </p>

              <div className="flex justify-between mt-2 text-sm">
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleLike(img);
                }}>
                  ❤️ {img.likes || 0}
                </button>

                <button onClick={(e) => {
                  e.stopPropagation();
                  downloadMedia(img.url);
                }}>
                  ⬇️
                </button>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* 🔍 FULL SCREEN VIEW */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-5 right-5 text-3xl"
            >
              ✖
            </button>

            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-5 text-4xl"
            >
              ⬅️
            </button>

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-5 text-4xl"
            >
              ➡️
            </button>

            {/* MEDIA */}
            <motion.div
              key={images[activeIndex].url}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full p-4"
            >
              {images[activeIndex].type === "video" ? (
                <video
                  src={images[activeIndex].url}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              ) : (
                <img
                  src={images[activeIndex].url}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              )}

              {/* INFO */}
              <div className="mt-4 text-center">
                <p className="font-semibold">
                  {images[activeIndex].user}
                </p>
                <p className="text-gray-300 text-sm">
                  {images[activeIndex].caption}
                </p>
                <p className="mt-2">
                  ❤️ {images[activeIndex].likes || 0}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BeautifulGallery;