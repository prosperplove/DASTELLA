import React from 'react';
import { Link } from 'react-router-dom';
import mtx from "../Images/logo.png"
const NavBar = () => {
  
  return (
    <div>
      <nav className="navbar fixed-top">
    <div className="logo" style={{ color:"white", fontWeight:"bold",fontSize:"2rem" }}> 
        <Link to="/" style={{ textDecoration:"none", color:"white" }}><span style={{ fontFamily:"cursive" }}> <img src={mtx} style={{ width:"60px" }} alt="" /> M</span>at<span style={{ color:"purple" }}>rix</span></Link></div>
       
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul className="nav-links">
      <li><Link to="/Whitepaper">Whitepaper</Link></li>
      <li><Link to="/WhiteList">Join Whitelist</Link></li>
      <li><Link to="/TokenUtility">Token Utility</Link></li>
    </ul>
  </nav>
    </div>
  )
}

export default NavBar
