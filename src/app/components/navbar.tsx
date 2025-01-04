import React from 'react'


    import Link from 'next/link';
    
    const Navbar = () => {
      return (
        <nav className="navbar">
          <div className="logo">
            <Link href="/">Ali Portfolio</Link>
          </div>
          <ul className="navLinks">
            <li> <Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      );
    };
    
    export default Navbar;
    

