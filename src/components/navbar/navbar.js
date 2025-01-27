 import React from 'react';
 import './navbar.css';
 import { Link } from 'react-scroll';

 const Navbar = () => {
   return (
  <nav className='navbar'>
        <div className="desktopMenu">
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>Skills</Link>        
        <Link className='desktopMenuListItem'>About</Link>        
        <Link className='desktopMenuListItem'>Project</Link>        

</div>
        <button className="desktopMenuBtn">
            Contact Me
        </button>
  </nav>                
)
 }
 
 export default Navbar