import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaStar, FaDiscord } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { SiGoogle,SiTesla, SiAmazon,SiMeta,SiApple,SiEthereum,SiSolana,SiPolygon } from 'react-icons/si'
const Footer = () => {

  return (
    <div>
        
    <footer> 
           <h1>Join the Matrix community</h1>
        <div className="container">
       <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
        <Link to="/" style={{ textDecoration:"none", color:"white" }}><h1><FaStar color='purple'/> Mat<span style={{ color:"purple" }}>rix</span></h1></Link> 
            <p>Copyright @ 2025 Matrix</p>
           </div>
         <div className="col-12 col-md-6 col-lg-3">
           
          <SiGoogle size={30}/><br />
          <SiAmazon size={30}/><br />
          <SiTesla size={30}/><br />
          <SiMeta size={30}/>
        </div>
         <div className="col-12 col-md-6 col-lg-3">
         <Link to="/Whitepaper" style={{textDecoration:"none",color:" #c5bcbc"}}>Whitepaper</Link><br />
          <Link to="/WhiteList" style={{textDecoration:"none",color:" #c5bcbc"}}>Join Whitelist</Link>
        </div>
        <div className="col-12 col-md-6 col-lg-3" id='link'>
          <a href="https://facebook.com"><FaFacebook size={30}/> Facebook</a><br />
           <a href="https://ng.linkedin.com/in/chukwujekwu-prosper-nzoputa-378196267"> <FaLinkedin size={30}/> Linkedln</a><br />
            <a href="https://x.com/properpLove"><FaTwitter size={30}/> X (Twitter)</a><br />
            <a href="https://discord.gg/prosperplove"><FaDiscord size={30}/>Discord</a>
          </div>
           <hr  style={{ color:"white" }}/>
       </div>
          
        </div>
        
 </footer>

    </div>
  )
}

export default Footer