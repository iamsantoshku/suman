import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div>Navbar</div>
    <div className="flex justify-center gap-6 p-4 bg-pink-500 text-white">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/story">Story</Link>
      <Link to="/message">Message</Link>
      <Link to="/proposal">Proposal</Link>
    </div>
  )
}

export default Navbar