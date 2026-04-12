

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db, galleryRef } from "../firebase";

const CLOUD_NAME = "dddallwob";
const UPLOAD_PRESET = "suman-santosh";

const AddGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  /* NEW STATES */
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  const [showModal, setShowModal] = useState(false);

  /* 🔥 LOAD */
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

  /* ❤️ DOUBLE TAP */
  const handleDoubleTap = (img) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      handleLike(img);
    }
    setLastTap(now);
  };

  /* 🎥 VIDEO COMPRESS (BASIC) */
  const compressVideo = async (file) => {
    return file; // (Cloudinary auto optimizes video)
  };

  /* ☁️ UPLOAD TO CLOUDINARY */
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    const isVideo = file.type.startsWith("video");

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const resourceType = isVideo ? "video" : "image";

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return {
      url: data.secure_url,
      type: isVideo ? "video" : "image",
    };
  };

  /* 📤 UPLOAD */
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (!username) {
      alert("Enter your name ❤️");
      return;
    }

    setLoading(true);

    for (let file of files) {
      let processedFile = file;

      if (file.type.startsWith("video")) {
        processedFile = await compressVideo(file);
      }

      const uploaded = await uploadToCloudinary(processedFile);

      await addDoc(galleryRef, {
        url: uploaded.url,
        type: uploaded.type,
        likes: 0,
        caption: caption || "❤️ Beautiful Memory",
        user: username,
        createdAt: Date.now(),
      });
    }

    setLoading(false);
    setCaption("");
    fetchImages();
  };

  /* ❌ DELETE */
  const deleteImage = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    fetchImages();
  };

  /* ⬇️ DOWNLOAD */
  const downloadMedia = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "memory";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white mt-7 roounded-sm">


        {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">

    <div className="bg-white text-black p-6 rounded-xl w-[90%] max-w-md relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-xl"
      >
        ✖
      </button>

      <h2 className="text-xl font-bold mb-4 text-center">
        Upload Memory 💖
      </h2>

      {/* NAME */}
      <input
        type="text"
        placeholder="Your Name ❤️"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded outline-none"
      />

      {/* CAPTION */}
      <input
        type="text"
        placeholder="Write caption 💬"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded outline-none"
      />

      {/* FILE */}
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={(e) => {
          handleUpload(e);
          setShowModal(false);
        }}
        className="w-full mb-4"
      />

      <p className="text-sm text-gray-500 text-center">
        Upload your beautiful memories ❤️
      </p>

    </div>
  </div>
)}

      {/* 🔝 TOP BAR */}
      {/* <div className="sticky top-0 z-50 bg-black border-b border-gray-700 p-4 flex flex-col gap-3">

        <h1 className="text-xl font-bold text-center">❤️ LoveGram</h1>


        <div className="flex flex-col md:flex-row gap-2">

          <input
            type="text"
            placeholder="Your Name ❤️"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-3 py-2 rounded bg-gray-800 outline-none"
          />

          <input
            type="text"
            placeholder="Write caption 💬"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="flex-1 px-3 py-2 rounded bg-gray-800 outline-none"
          />

          <label className="bg-pink-500 px-4 py-2 rounded cursor-pointer text-center">
            Upload
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>

        </div>
      </div> */}

      <div className="sticky top-0 z-50 bg-black border-b border-gray-700 p-4 flex justify-between items-center">

  <h1 className="text-xl font-bold">❤️ LoveGram</h1>

  <button
    onClick={() => setShowModal(true)}
    className="bg-pink-500 px-4 py-2 rounded-full text-sm"
  >
    Upload ➕
  </button>

</div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-4 text-pink-400">
          Uploading... 💖
        </p>
      )}

      {/* 📸 FEED */}
      <div className="max-w-md mx-auto">

        {images.map((img) => (
          <div key={img.id} className="border-b border-gray-800 mb-6">

            {/* USER */}
            <div className="flex items-center gap-3 p-3">
              <img
                src="/images/her2.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-semibold">{img.user}</p>
            </div>

            {/* MEDIA */}
            <div
              className="relative bg-black flex justify-center items-center"
              onClick={() => handleDoubleTap(img)}
            >
              {img.type === "video" ? (
                <video
                  src={img.url}
                  controls
                  className="w-full max-h-[500px] object-contain"
                />
              ) : (
                <img
                  src={img.url}
                  className="w-full max-h-[500px] object-contain"
                />
              )}

              {/* ❤️ ANIMATION */}
              <motion.div
                initial={{ scale: 0 }}
                whileTap={{ scale: 1.5 }}
                className="absolute inset-0 flex justify-center items-center text-6xl opacity-0 active:opacity-100"
              >
                ❤️
              </motion.div>
            </div>

            {/* ACTIONS */}
            <div className="p-3 flex justify-between items-center">
              <div className="flex gap-4 text-xl">
                <button onClick={() => handleLike(img)}>❤️</button>
                <button onClick={() => setSelectedImg(img.url)}>🔍</button>
              </div>

              <button onClick={() => downloadMedia(img.url)}>⬇️</button>
            </div>

            {/* LIKES */}
            <p className="px-3 font-semibold">
              {img.likes || 0} likes
            </p>

            {/* CAPTION */}
            <p className="px-3 text-sm text-gray-300">
              <span className="font-semibold">{img.user}</span>{" "}
              {img.caption}
            </p>

            {/* DELETE */}
            <button
              onClick={() => deleteImage(img.id)}
              className="text-red-400 text-sm px-3 py-2"
            >
              Delete ❌
            </button>

          </div>
        ))}

      </div>

      {/* 🔍 LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-h-[90vh] rounded-xl" />
        </div>
      )}

    </div>
  );
};

export default AddGallery;