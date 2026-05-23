import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaBlog,
  FaUserAlt,
  FaBriefcase,
  FaAddressBook,
  FaMoon,
  FaSun,
  // FaDownload,
} from 'react-icons/fa';

const navItems = [
  { to: '/', icon: FaHome, label: 'Home' },
  { to: '/about', icon: FaUserAlt, label: 'About' },
  { to: '/Skills', icon: FaBlog, label: 'Skills' },
  { to: '/contact', icon: FaAddressBook, label: 'Contact' },
  { to: '/Project', icon: FaBriefcase, label: 'Projects' },
];

export default function Nav() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const location = useLocation();

  useEffect(() => {
    document.body.className = darkMode ? 'theme-dark' : 'theme-light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className="nav-wrapper" aria-label="Main navigation">
      <div className="nav-bar">


        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <div className="nav-item" key={to}>
              <Link
                to={to}
                className={`nav-link${isActive ? ' active' : ''}`}
                aria-label={label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon />
              </Link>
              <span className="nav-tooltip" role="tooltip">{label}</span>
            </div>
          );
        })}

        <div className="nav-divider" aria-hidden="true" />



        <div className="nav-divider" aria-hidden="true" />

        <div className="nav-item">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <span className="nav-tooltip" role="tooltip">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>

      </div>
    </nav>
  );
}