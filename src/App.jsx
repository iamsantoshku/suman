// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
// import Story from "./pages/Story";
// import Message from "./pages/Message";
// import Proposal from "./pages/Proposal";
// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/story" element={<Story />} />
//         <Route path="/message" element={<Message />} />
//         <Route path="/proposal" element={<Proposal />} />
//       </Routes>
//     </Router>
//   );
// }


// import React from 'react'
// import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Gallery from './pages/Gallery'
// import Story from './pages/Story'
// import Message from './pages/Message'

// import Perposal from './pages/Perposal'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// const App = () => {
//   return (


//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/gallery' element={<Gallery />} />
//         <Route path='/story' element={<Story />} />
//         <Route path='/message' element={<Message />} />
//         <Route path='/proposal' element={<Perposal />} />
//       </Routes>
//       <Footer/>
//     </Router>
//   )
// }

// export default App




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import Message from "./pages/Message";
import Perposal from "./pages/Perposal";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* 🔥 FULL PAGE FLEX */}
      <div className="flex flex-col min-h-screen">

        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 📄 PAGE CONTENT */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/story" element={<Story />} />
            <Route path="/message" element={<Message />} />
            <Route path="/proposal" element={<Perposal />} />
          </Routes>
        </div>

        {/* 🔻 FOOTER (ALWAYS BOTTOM) */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;