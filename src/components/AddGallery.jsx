








// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [likes, setLikes] = useState({});
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [slideshow, setSlideshow] = useState(false);

//   /* LOAD DATA */
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("gallery")) || [];
//     setImages(saved);
//   }, []);

//   /* ❤️ LIKE FUNCTION */
//   const handleLike = (index) => {
//     setLikes((prev) => ({
//       ...prev,
//       [index]: prev[index] ? prev[index] + 1 : 1,
//     }));
//   };

//   /* ▶️ SLIDESHOW */
//   useEffect(() => {
//     if (!slideshow || images.length === 0) return;

//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slideshow, images]);

//   /* 🔥 COMPRESS IMAGE */
//   const compressImage = (file) => {
//     return new Promise((resolve) => {
//       const reader = new FileReader();

//       reader.readAsDataURL(file);

//       reader.onload = (event) => {
//         const img = new Image();
//         img.src = event.target.result;

//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d");

//           const MAX_WIDTH = 800;
//           const scale = MAX_WIDTH / img.width;

//           canvas.width = MAX_WIDTH;
//           canvas.height = img.height * scale;

//           ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//           const compressed = canvas.toDataURL("image/jpeg", 0.7);
//           resolve(compressed);
//         };
//       };
//     });
//   };

//   /* 📤 UPLOAD */
//   const handleUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = [];

//     for (let file of files) {
//       const compressed = await compressImage(file);
//       newImages.push(compressed);
//     }

//     const updated = [...images, ...newImages];

//     try {
//       localStorage.setItem("gallery", JSON.stringify(updated));
//       setImages(updated);
//     } catch (error) {
//       alert("Storage Full 😢 Delete some images!");
//     }
//   };

//   /* ❌ DELETE */
//   const deleteImage = (index) => {
//     const updated = images.filter((_, i) => i !== index);
//     localStorage.setItem("gallery", JSON.stringify(updated));
//     setImages(updated);
//   };

//   return (
//     <div className="p-4">

//       {/* TITLE */}
//       <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
//         💖 Our Memories 💖
//       </h2>

//       {/* CONTROLS */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">

//         <label className="cursor-pointer bg-pink-500 text-white px-6 py-2 rounded-full shadow">
//           Upload 📸
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleUpload}
//             className="hidden"
//           />
//         </label>

//         <button
//           onClick={() => setSlideshow(!slideshow)}
//           className="bg-purple-500 text-white px-6 py-2 rounded-full shadow"
//         >
//           {slideshow ? "Stop ▶️" : "Start Slideshow 🎞️"}
//         </button>

//       </div>

//       {/* 🎞️ SLIDESHOW */}
//       {slideshow && images.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <img
//             src={images[slideIndex]}
//             className="w-full max-w-2xl h-80 object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       )}

//       {/* 📸 GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-xl overflow-hidden shadow-lg group"
//             whileHover={{ scale: 1.05 }}
//           >

//             <img
//               src={img}
//               className="w-full h-64 object-cover cursor-pointer"
//               onClick={() => setSelectedImg(img)}
//             />

//             {/* ACTION BUTTONS */}
//             <div className="absolute bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">

//               <button
//                 onClick={() => handleLike(index)}
//                 className="bg-white px-2 py-1 rounded shadow"
//               >
//                 ❤️ {likes[index] || 0}
//               </button>

//               <button
//                 onClick={() => deleteImage(index)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 ❌
//               </button>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* 🔍 LIGHTBOX */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img
//             src={selectedImg}
//             className="max-w-3xl max-h-[90vh] rounded-xl"
//           />
//         </div>
//       )}

//     </div>
//   );
// };

// export default AddGallery;






// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const CLOUD_NAME = "dddallwob";
// const UPLOAD_PRESET = "suman-santosh";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [likes, setLikes] = useState({});
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [slideshow, setSlideshow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [preview, setPreview] = useState([]);



//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("gallery")) || [];
//     const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
//     setImages(saved);
//     setLikes(savedLikes);
//   }, []);

//   /* SAVE */
//   useEffect(() => {
//     localStorage.setItem("gallery", JSON.stringify(images));
//     localStorage.setItem("likes", JSON.stringify(likes));
//   }, [images, likes]);

//   /* LIKE */
//   const handleLike = (index) => {
//     const updated = {
//       ...likes,
//       [index]: likes[index] ? likes[index] + 1 : 1,
//     };
//     setLikes(updated);
//   };

//   /* SLIDESHOW */
//   useEffect(() => {
//     if (!slideshow || images.length === 0) return;

//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slideshow, images]);

//   /* CLOUD UPLOAD */
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

//   /* HANDLE UPLOAD */
//   const handleUpload = async (e) => {
//     const files = Array.from(e.target.files);

//     setPreview(files.map((file) => URL.createObjectURL(file)));
//     setLoading(true);

//     const uploadedImages = [];

//     for (let file of files) {
//       const url = await uploadToCloudinary(file);
//       uploadedImages.push(url);
//     }

//     setImages((prev) => [...prev, ...uploadedImages]);
//     setPreview([]);
//     setLoading(false);
//   };



//   /* DELETE */
//   const deleteImage = (index) => {
//     const updated = images.filter((_, i) => i !== index);
//     setImages(updated);
//   };

//   /* DOWNLOAD */
//   const downloadImage = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "love-memory.jpg";
//     link.click();
//   };

//   return (
//     <div className="p-4 min-h-screen bg-gradient-to-r from-pink-100 to-pink-200">

//       <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-6">
//         💖 Our Love Gallery 💖
//       </h2>

//       {/* UPLOAD */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">

//         <label className="bg-pink-500 text-white px-6 py-3 rounded-full cursor-pointer shadow-lg">
//           Upload 📸
//           <input type="file" multiple onChange={handleUpload} className="hidden" />
//         </label>

//         <button
//           onClick={() => setSlideshow(!slideshow)}
//           className="bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg"
//         >
//           {slideshow ? "Stop 🎞️" : "Start Slideshow"}
//         </button>

//       </div>

//       {/* LOADING */}
//       {loading && (
//         <div className="text-center text-lg text-pink-600">
//           Uploading... ❤️
//         </div>
//       )}

//       {/* PREVIEW */}
//       <div className="flex gap-3 justify-center flex-wrap mb-4">
//         {preview.map((img, i) => (
//           <img key={i} src={img} className="w-24 h-24 object-cover rounded-lg" />
//         ))}
//       </div>

//       {/* SLIDESHOW */}
//       {slideshow && images.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <img
//             src={images[slideIndex]}
//             className="w-full max-w-3xl h-96 object-cover rounded-xl shadow-xl"
//           />
//         </div>
//       )}

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative group rounded-xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >

//             <img
//               src={img}
//               className="w-full h-72 object-cover cursor-pointer"
//               onClick={() => setSelectedImg(img)}
//             />

//             {/* ACTIONS */}
//             <div className="absolute bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">

//               <button
//                 onClick={() => handleLike(index)}
//                 className="bg-white px-2 py-1 rounded"
//               >
//                 ❤️ {likes[index] || 0}
//               </button>

//               <button
//                 onClick={() => deleteImage(index)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 ❌
//               </button>

//               <button
//                 onClick={() => downloadImage(img)}
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
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img
//             src={selectedImg}
//             className="max-w-4xl max-h-[90vh] rounded-xl"
//           />
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

  /* 🔥 LOAD FROM FIREBASE */
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

  /* 🎞️ SLIDESHOW */
  useEffect(() => {
    if (!slideshow || images.length === 0) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideshow, images]);

  /* ☁️ UPLOAD TO CLOUDINARY */
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
    <div className="p-4 min-h-screen bg-gradient-to-r from-pink-100 to-pink-200">

      <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-6">
        💖 Our Forever Memories 💖
      </h2>

      {/* UPLOAD */}
      <div className="flex justify-center gap-4 mb-6">

        <label className="bg-pink-500 text-white px-6 py-3 rounded-full cursor-pointer">
          Upload 📸
          <input type="file" multiple onChange={handleUpload} className="hidden" />
        </label>

        <button
          onClick={() => setSlideshow(!slideshow)}
          className="bg-purple-500 text-white px-6 py-3 rounded-full"
        >
          {slideshow ? "Stop 🎞️" : "Start Slideshow"}
        </button>

      </div>

      {/* LOADING */}
      {loading && <p className="text-center text-pink-600">Uploading... ❤️</p>}

      {/* SLIDESHOW */}
      {slideshow && images.length > 0 && (
        <div className="flex justify-center mb-6">
          <img
            src={images[slideIndex].url}
            className="w-full max-w-3xl h-96 object-cover rounded-xl"
          />
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {images.map((img) => (
          <motion.div
            key={img.id}
            className="relative group rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={img.url}
              className="w-full h-72 object-cover cursor-pointer"
              onClick={() => setSelectedImg(img.url)}
            />

            <div className="absolute bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100">

              <button
                onClick={() => handleLike(img)}
                className="bg-white px-2 py-1 rounded"
              >
                ❤️ {img.likes || 0}
              </button>

              <button
                onClick={() => deleteImage(img.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                ❌
              </button>

              <button
                onClick={() => downloadImage(img.url)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                ⬇️
              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-h-[90vh] rounded-xl" />
        </div>
      )}

    </div>
  );
};

export default AddGallery;