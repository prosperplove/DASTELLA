import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaStar, FaDiscord } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import mtx from "../Images/logo.png"
import { FaLinkedin } from 'react-icons/fa6'
import { SiGoogle,SiTesla, SiAmazon,SiMeta,SiApple,SiEthereum,SiSolana,SiPolygon } from 'react-icons/si'
const Footer = () => {

  return (
    <div className='foot'>
        
    <footer> 
           <h1 style={{ fontSize:"1.3rem" }}>Join the Matrix community</h1>
        <div className="container">
       <div className="row">
        <div className="col-6 col-md-6 col-lg-3">
        <Link to="/" style={{ textDecoration:"none", color:"white" }}><h1><img src={mtx} style={{ width:"60px"}}  alt="" /> Mat<span style={{ color:"purple" }}>rix</span></h1></Link> 
            <p>Copyright @ 2025 Matrix</p>
           </div>
            <div className="col-6 col-md-6 col-lg-3">
         <Link to="/Whitepaper" style={{textDecoration:"none",color:" #c5bcbc"}}>Whitepaper</Link><br />
          <Link to="/WhiteList" style={{textDecoration:"none",color:" #c5bcbc"}}>Join Whitelist</Link>
        </div>
         <div className="col-6 col-md-6 col-lg-3">
           <SiGoogle size={15}/><br />
          <SiAmazon size={15}/><br />
          <SiTesla size={15}/><br />
          <SiMeta size={15}/>
        </div>
        <div className="col-6 col-md-6 col-lg-3" id='link'>
          <a href="https://facebook.com"><FaFacebook size={15}/> Facebook</a><br />
           <a href="https://ng.linkedin.com/in/chukwujekwu-prosper-nzoputa-378196267"> <FaLinkedin size={15}/> Linkedln</a><br />
            <a href="https://x.com/properpLove"><FaTwitter size={15}/> X (Twitter)</a><br />
            <a href="https://discord.gg/prosperplove"><FaDiscord size={15}/>Discord</a>
          </div>
           <hr  style={{ color:"white" }}/>
       </div>
          
        </div>
        
 </footer>

    </div>
  )
}

export default Footer