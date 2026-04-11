


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc
// } from "firebase/firestore";
// import { db, galleryRef } from "../firebase";

// const CLOUD_NAME = "dddallwob";
// const UPLOAD_PRESET = "suman-santosh";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [slideshow, setSlideshow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   /* 🔥 LOAD FROM FIREBASE */
//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const data = await getDocs(galleryRef);
//     const result = data.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setImages(result);
//   };

//   /* ❤️ LIKE */
//   const handleLike = async (img) => {
//     const ref = doc(db, "gallery", img.id);
//     await updateDoc(ref, {
//       likes: (img.likes || 0) + 1,
//     });
//     fetchImages();
//   };

//   /* 🎞️ SLIDESHOW */
//   useEffect(() => {
//     if (!slideshow || images.length === 0) return;

//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slideshow, images]);

//   /* ☁️ UPLOAD TO CLOUDINARY */
//   const uploadToCloudinary = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", UPLOAD_PRESET);

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     const data = await res.json();
//     return data.secure_url;
//   };

//   /* 📤 UPLOAD */
//   const handleUpload = async (e) => {
//     const files = Array.from(e.target.files);

//     setLoading(true);

//     for (let file of files) {
//       const url = await uploadToCloudinary(file);

//       await addDoc(galleryRef, {
//         url,
//         likes: 0,
//         createdAt: Date.now(),
//       });
//     }

//     setLoading(false);
//     fetchImages();
//   };

//   /* ❌ DELETE */
//   const deleteImage = async (id) => {
//     await deleteDoc(doc(db, "gallery", id));
//     fetchImages();
//   };

//   /* ⬇️ DOWNLOAD */
//   const downloadImage = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "memory.jpg";
//     link.click();
//   };

//   return (
//     <div className="p-4 min-h-screen bg-gradient-to-r from-pink-100 to-pink-200">

//       <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-6">
//         💖 Our Forever Memories 💖
//       </h2>

//       {/* UPLOAD */}
//       <div className="flex justify-center gap-4 mb-6">

//         <label className="bg-pink-500 text-white px-6 py-3 rounded-full cursor-pointer">
//           Upload 📸
//           <input type="file" multiple onChange={handleUpload} className="hidden" />
//         </label>

//         <button
//           onClick={() => setSlideshow(!slideshow)}
//           className="bg-purple-500 text-white px-6 py-3 rounded-full"
//         >
//           {slideshow ? "Stop 🎞️" : "Start Slideshow"}
//         </button>

//       </div>

//       {/* LOADING */}
//       {loading && <p className="text-center text-pink-600">Uploading... ❤️</p>}

//       {/* SLIDESHOW */}
//       {slideshow && images.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <img
//             src={images[slideIndex].url}
//             className="w-full max-w-3xl h-96 object-cover rounded-xl"
//           />
//         </div>
//       )}

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {images.map((img) => (
//           <motion.div
//             key={img.id}
//             className="relative group rounded-xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >

//             <img
//               src={img.url}
//               className="w-full h-72 object-cover cursor-pointer"
//               onClick={() => setSelectedImg(img.url)}
//             />

//             <div className="absolute bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100">

//               <button
//                 onClick={() => handleLike(img)}
//                 className="bg-white px-2 py-1 rounded"
//               >
//                 ❤️ {img.likes || 0}
//               </button>

//               <button
//                 onClick={() => deleteImage(img.id)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 ❌
//               </button>

//               <button
//                 onClick={() => downloadImage(img.url)}
//                 className="bg-blue-500 text-white px-2 py-1 rounded"
//               >
//                 ⬇️
//               </button>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* LIGHTBOX */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img src={selectedImg} className="max-h-[90vh] rounded-xl" />
//         </div>
//       )}

//     </div>
//   );
// };

// export default AddGallery;






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
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideshow, setSlideshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastTap, setLastTap] = useState(0);

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

  /* ❤️ DOUBLE TAP LIKE */
  const handleDoubleTap = (img) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      handleLike(img);
    }
    setLastTap(now);
  };

  /* 🎞️ SLIDESHOW */
  useEffect(() => {
    if (!slideshow || images.length === 0) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slideshow, images]);

  /* ☁️ CLOUDINARY */
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  /* 📤 UPLOAD */
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);

    for (let file of files) {
      const url = await uploadToCloudinary(file);

      await addDoc(galleryRef, {
        url,
        likes: 0,
        caption: "Our Beautiful Memory 💖",
        user: "Santosh ❤️ Suman",
        createdAt: Date.now(),
      });
    }

    setLoading(false);
    fetchImages();
  };

  /* ❌ DELETE */
  const deleteImage = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    fetchImages();
  };

  /* ⬇️ DOWNLOAD */
  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "memory.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 bg-black border-b border-gray-700 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">❤️ LoveGram</h1>

        <label className="bg-pink-500 px-4 py-2 rounded-full cursor-pointer text-sm">
          Upload
          <input type="file" multiple onChange={handleUpload} className="hidden"/>
        </label>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center mt-4 text-pink-400">Uploading... 💖</p>
      )}

      {/* 🎞️ SLIDESHOW */}
      {slideshow && images.length > 0 && (
        <div className="flex justify-center my-4">
          <img
            src={images[slideIndex].url}
            className="w-full max-w-xl h-80 object-cover rounded-xl"
          />
        </div>
      )}

      {/* 📸 INSTAGRAM FEED */}
      <div className="max-w-md mx-auto">

        {images.map((img) => (
          <div key={img.id} className="border-b border-gray-800 mb-6">

            {/* USER HEADER */}
            <div className="flex items-center gap-3 p-3">
              <img
                src="/images/her1.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-semibold">{img.user}</p>
            </div>

            {/* IMAGE */}
           <div
  className="relative bg-black flex justify-center items-center"
  onClick={() => handleDoubleTap(img)}
>
  <img
    src={img.url}
    className="w-full max-h-[500px] object-contain bg-black"
  />


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

              <button onClick={() => downloadImage(img.url)}>⬇️</button>

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