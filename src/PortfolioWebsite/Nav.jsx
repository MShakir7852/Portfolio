import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBlog, FaUserAlt, FaFirstAid, FaAddressBook, FaMoon, FaSun } from "react-icons/fa";

export default function Nav() {
  const [Darkmode,setDarkmode]=useState(false);
  useEffect(() => {
    document.body.className=Darkmode?'theme-dark ':"theme-light ";
    
  }, [Darkmode]);
  const toggleTheme=()=>{
    setDarkmode((prev)=>!prev);
  }
  return (
    <div>
      <div className="NavBar">
        <ul>
          <button
            className='toggle'
            onClick={toggleTheme}
            style={{ borderRadius: "50%", padding: "10px 15px", border: "none" }}
          >
            {Darkmode ? <FaSun /> : <FaMoon />}
          </button>
          <li><Link to="/"><FaHome className='icon' /></Link></li>
          <li><Link to="./about"><FaUserAlt className='icon' /> </Link></li>
          <li><Link to="./portfolio"><FaFirstAid className='icon' /></Link></li>
          <li><Link to="./Contact"><FaAddressBook className='icon' /></Link></li>
          <li><Link to="./Blog"><FaBlog className='icon' /></Link></li>
        </ul>
      </div>
    </div>
  );
}
