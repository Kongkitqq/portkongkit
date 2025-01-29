import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import resume from '../../pic/Resume_Kongkit Yeesai.pdf'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link to="home" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Home</Link>
        <Link to="skills" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Skills</Link>
        <Link to="about" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>About</Link>
        <Link to="project" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Project</Link>
      </div>

      <a href="/path/to/resume.pdf" className="btn btn-dowload_resume" download>📄 Download Resume</a>
      {/* Mobile Menu */}
      <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={799} offset={-80} className='mobileMenuListItem' onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="skills" smooth={true} duration={799} offset={-80} className='mobileMenuListItem' onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="about" smooth={true} duration={799} offset={-80} className='mobileMenuListItem' onClick={() => setIsOpen(false)}>About</Link>
        <Link to="project" smooth={true} duration={799} offset={-80} className='mobileMenuListItem' onClick={() => setIsOpen(false)}>Project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
