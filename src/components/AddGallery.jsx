// import { useState } from "react";
// import { motion } from "framer-motion";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);

//   // Handle Image Upload
//   const handleUpload = (e) => {
//     const files = Array.from(e.target.files);

//     const imageUrls = files.map((file) => URL.createObjectURL(file));

//     setImages((prev) => [...prev, ...imageUrls]);
//   };

//   return (
//     <div className="min-h-screen bg-pink-100 p-6">

//       {/* TITLE */}
//       <h1 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-6">
//         💖 Our Memories 💖
//       </h1>

//       {/* UPLOAD BUTTON */}
//       <div className="flex justify-center mb-8">
//         <label className="cursor-pointer bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
//           Add Photos 📸
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleUpload}
//             className="hidden"
//           />
//         </label>
//       </div>

//       {/* GALLERY GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden rounded-xl shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src={img}
//               alt="gallery"
//               className="w-full h-48 object-cover"
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* EMPTY STATE */}
//       {images.length === 0 && (
//         <p className="text-center text-gray-500 mt-10">
//           No images yet 💔 — Add your beautiful memories ❤️
//         </p>
//       )}
//     </div>
//   );
// };

// export default AddGallery;






// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [likes, setLikes] = useState({});
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [slideshow, setSlideshow] = useState(false);

//   /* 🔄 LOAD FROM LOCAL STORAGE */
//   useEffect(() => {
//     const savedImages = JSON.parse(localStorage.getItem("gallery")) || [];
//     const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
//     setImages(savedImages);
//     setLikes(savedLikes);
//   }, []);

//   /* 💾 SAVE TO LOCAL STORAGE */
//   useEffect(() => {
//     localStorage.setItem("gallery", JSON.stringify(images));
//     localStorage.setItem("likes", JSON.stringify(likes));
//   }, [images, likes]);

//   /* 📸 UPLOAD */
//   const handleUpload = (e) => {
//     const files = Array.from(e.target.files);

//     const readers = files.map((file) => {
//       return new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result);
//         reader.readAsDataURL(file);
//       });
//     });

//     Promise.all(readers).then((imgs) => {
//       setImages((prev) => [...prev, ...imgs]);
//     });
//   };

//   /* ❌ DELETE */
//   const handleDelete = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     setImages(newImages);
//   };

//   /* ❤️ LIKE */
//   const handleLike = (index) => {
//     setLikes((prev) => ({
//       ...prev,
//       [index]: prev[index] ? prev[index] + 1 : 1,
//     }));
//   };

//   /* ▶️ SLIDESHOW */
//   useEffect(() => {
//     if (!slideshow) return;

//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slideshow, images]);

//   return (
//     <div className="min-h-screen bg-pink-100 p-6">

//       {/* TITLE */}
//       <h1 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-6">
//         💖 Our Love Gallery 💖
//       </h1>

//       {/* BUTTONS */}
//       <div className="flex flex-wrap justify-center gap-4 mb-6">

//         <label className="cursor-pointer bg-pink-500 text-white px-6 py-2 rounded-full">
//           Upload 📸
//           <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden"/>
//         </label>

//         <button
//           onClick={() => setSlideshow(!slideshow)}
//           className="bg-purple-500 text-white px-6 py-2 rounded-full"
//         >
//           {slideshow ? "Stop ▶️" : "Start Slideshow 🎞️"}
//         </button>

//       </div>

//       {/* SLIDESHOW VIEW */}
//       {slideshow && images.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <img
//             src={images[slideIndex]}
//             className="w-full max-w-xl h-64 object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       )}

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >

//             <img
//               src={img}
//               className="w-full h-48 object-cover cursor-pointer"
//               onClick={() => setSelectedImg(img)}
//             />

//             {/* ACTIONS */}
//             <div className="absolute bottom-2 left-2 flex gap-2">

//               <button
//                 onClick={() => handleLike(index)}
//                 className="bg-white px-2 py-1 rounded shadow"
//               >
//                 ❤️ {likes[index] || 0}
//               </button>

//               <button
//                 onClick={() => handleDelete(index)}
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//               >
//                 ❌
//               </button>

//             </div>

//           </motion.div>
//         ))}

//       </div>

//       {/* FULL SCREEN VIEW */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img
//             src={selectedImg}
//             className="max-w-[90%] max-h-[90%] rounded-xl"
//           />
//         </div>
//       )}

//       {/* EMPTY */}
//       {images.length === 0 && (
//         <p className="text-center mt-10 text-gray-500">
//           No memories yet 💔 Add some beautiful moments ❤️
//         </p>
//       )}
//     </div>
//   );
// };

// export default AddGallery;





// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const AddGallery = () => {
//   const [images, setImages] = useState([]);
//     const [selectedImg, setSelectedImg] = useState(null);
//     const [likes, setLikes] = useState({});
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [slideshow, setSlideshow] = useState(false);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("gallery")) || [];
//     setImages(saved);
//   }, []);

//   // 🔥 IMAGE COMPRESS FUNCTION
//   const compressImage = (file) => {


//       /* ❤️ LIKE */
//   const handleLike = (index) => {
//     setLikes((prev) => ({
//       ...prev,
//       [index]: prev[index] ? prev[index] + 1 : 1,
//     }));
//   };

//   /* ▶️ SLIDESHOW */
//   useEffect(() => {
//     if (!slideshow) return;

//     const interval = setInterval(() => {
//       setSlideIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [slideshow, images]);
//     return new Promise((resolve) => {
//       const reader = new FileReader();

//       reader.readAsDataURL(file);

//       reader.onload = (event) => {
//         const img = new Image();
//         img.src = event.target.result;

//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d");

//           // reduce size
//           const MAX_WIDTH = 800;
//           const scale = MAX_WIDTH / img.width;

//           canvas.width = MAX_WIDTH;
//           canvas.height = img.height * scale;

//           ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//           const compressed = canvas.toDataURL("image/jpeg", 0.7); // quality 70%
//           resolve(compressed);
//         };
//       };
//     });
//   };

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
//       alert("Storage Full 😢 Try deleting some images!");
//     }
//   };

//   const deleteImage = (index) => {
//     const updated = images.filter((_, i) => i !== index);
//     localStorage.setItem("gallery", JSON.stringify(updated));
//     setImages(updated);
//   };

//   return (
//     <div className="p-4">

//       <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
//         Add Memories 💖
//       </h2>

     

//        <div className="flex flex-wrap justify-center gap-4 mb-6">

//         <label className="cursor-pointer bg-pink-500 text-white px-6 py-2 rounded-full">
//           Upload 📸
//            <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden"/>
//         </label>

//         <button
//           onClick={() => setSlideshow(!slideshow)}
//           className="bg-purple-500 text-white px-6 py-2 rounded-full"
//         >
//           {slideshow ? "Stop ▶️" : "Start Slideshow 🎞️"}
//         </button>

//       </div>



     
// {/* //       {/* SLIDESHOW VIEW */}


//         {slideshow && images.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <img
//             src={images[slideIndex]}
//             className="w-full max-w-xl h-64 object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       )}

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >

//             <img
//               src={img}
//               className="w-full h-48 object-cover cursor-pointer"
//               onClick={() => setSelectedImg(img)}
//             />

//             {/* ACTIONS */}
           

//           </motion.div>
//         ))}

//       </div> 


//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {images.map((img, index) => (
//           <div key={index} className="relative group">
            
//             <img
//               src={img}
//               className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
//             />

            


//              <div className="absolute bottom-2 left-2 flex gap-2">

//                <button
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

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddGallery;








import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AddGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [likes, setLikes] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideshow, setSlideshow] = useState(false);

  /* LOAD DATA */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gallery")) || [];
    setImages(saved);
  }, []);

  /* ❤️ LIKE FUNCTION */
  const handleLike = (index) => {
    setLikes((prev) => ({
      ...prev,
      [index]: prev[index] ? prev[index] + 1 : 1,
    }));
  };

  /* ▶️ SLIDESHOW */
  useEffect(() => {
    if (!slideshow || images.length === 0) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideshow, images]);

  /* 🔥 COMPRESS IMAGE */
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const MAX_WIDTH = 800;
          const scale = MAX_WIDTH / img.width;

          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scale;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const compressed = canvas.toDataURL("image/jpeg", 0.7);
          resolve(compressed);
        };
      };
    });
  };

  /* 📤 UPLOAD */
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    for (let file of files) {
      const compressed = await compressImage(file);
      newImages.push(compressed);
    }

    const updated = [...images, ...newImages];

    try {
      localStorage.setItem("gallery", JSON.stringify(updated));
      setImages(updated);
    } catch (error) {
      alert("Storage Full 😢 Delete some images!");
    }
  };

  /* ❌ DELETE */
  const deleteImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    localStorage.setItem("gallery", JSON.stringify(updated));
    setImages(updated);
  };

  return (
    <div className="p-4">

      {/* TITLE */}
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        💖 Our Memories 💖
      </h2>

      {/* CONTROLS */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">

        <label className="cursor-pointer bg-pink-500 text-white px-6 py-2 rounded-full shadow">
          Upload 📸
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        <button
          onClick={() => setSlideshow(!slideshow)}
          className="bg-purple-500 text-white px-6 py-2 rounded-full shadow"
        >
          {slideshow ? "Stop ▶️" : "Start Slideshow 🎞️"}
        </button>

      </div>

      {/* 🎞️ SLIDESHOW */}
      {slideshow && images.length > 0 && (
        <div className="flex justify-center mb-6">
          <img
            src={images[slideIndex]}
            className="w-full max-w-2xl h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* 📸 GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={img}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => setSelectedImg(img)}
            />

            {/* ACTION BUTTONS */}
            <div className="absolute bottom-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">

              <button
                onClick={() => handleLike(index)}
                className="bg-white px-2 py-1 rounded shadow"
              >
                ❤️ {likes[index] || 0}
              </button>

              <button
                onClick={() => deleteImage(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                ❌
              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔍 LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-w-3xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}

    </div>
  );
};

export default AddGallery;