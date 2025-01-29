 import React from 'react';
 import './navbar.css';
 import { Link } from 'react-scroll';

 const Navbar = () => {
   return (
  <nav className='navbar'>
        <div className="desktopMenu">
        <Link to="home" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Home</Link>
        <Link to="skills" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Skills</Link>
        <Link to="about" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>About</Link>
        <Link to="project" smooth={true} duration={799} offset={-80} className='desktopMenuListItem'>Project</Link>
</div>
        <button className="desktopMenuBtn">
            Contact Me
        </button>
  </nav>                
)
 }
 
 export default Navbar