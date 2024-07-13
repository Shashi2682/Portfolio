import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
   <nav className='navbar'>
     <div className='menu'>
          <Link className='deskItem'>Home</Link>
          <Link className='deskItem'>About</Link>
          <Link className='deskItem'>Portfolio</Link>
          <Link className='deskItem'>Client</Link>
     </div>
     <button className='deskbtn'>Contact Me</button>
   </nav>
  )
}

export default Navbar
