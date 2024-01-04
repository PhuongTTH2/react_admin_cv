import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="user-hotels_navbar">
        <div className="user-hotels__nav-container">
        <span className="user-hotels__logo">Booking</span>
        <div className="user-hotels__navItems">
            <button className="user-hotels__nav-button">Register</button>
            <button className="user-hotels__nav-button">Login</button>
        </div>
        </div>
  </div>
  )
}

export default Navbar 