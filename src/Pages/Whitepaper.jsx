import React,{useEffect} from 'react'
import wall from "../Images/btc.jpg"
import { Link } from 'react-router-dom';
import RoadMap from './RoadMap';
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const Whitepaper = () => {
   useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
     useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  return (
    <div style={{ color:"white",paddingTop:'60px' }} id='paper'>
      <div className="section"  style={{ textAlign:'center' }} >
 <div className='Matrix'>
        <h2>Matrix: A Gateway to Bitcoin, Powered by BitVM and ZK-Proofs</h2> 
        <span>Whitepaper</span><br />
        <span>Version 1.0</span><br />
        <span>Date:3rd July, 2025</span><br />
        <Link to="/Whitelist"><button className='btn' style={{ backgroundColor:"purple", color:"white" }}>Join our whitelist</button></Link>
        </div>
      </div>
      <div className='container' id='whitepaper'>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6"  data-aos="flip-left" style={{ paddingTop:"60px" }}>
        <h2>Shaping the Future of Crypto & Fintech</h2> 
        <p>Innovating the intersection of blockchain and finance, we drive the next evolution in digital transactions, security, and accessibility</p>
        <p style={{ backgroundColor:"purple",display:"inline-block",fontSize:"1.5rem",borderRadius:"8px" }}>HODL the future</p>
        </div>
           <div className="col-12 col-md-6 col-lg-6">
       <img src={wall} alt="" />
        </div>
        </div>
      </div>
      
      <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <h1>Abstract:</h1>
        <p>Matrix is a novel platform designed to streamline access and interaction with Bitcoin (BTC) while enhancing privacy and security. Leveraging BitVM and zero-knowledge (ZK) proofs, Matrix creates a secure and efficient gateway for users to participate in the Bitcoin ecosystem without the complexity and steep learning curve traditionally associated with it. This whitepaper outlines the architecture, functionalities, and benefits of Matrix.</p>
      </div>
      <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <h1>1. Introduction:</h1>
        <p>Bitcoin's decentralized nature and inherent value have made it a global phenomenon. However, its technical complexity often deters potential users, particularly those unfamiliar with blockchain technology.  Matrix aims to bridge this gap by providing a user-friendly interface and secure access methods to Bitcoin's capabilities.  Matrix is designed to empower users with simplified interactions while maintaining the security and immutability of Bitcoin transactions.</p>
      </div>
      <div className="container" data-aos="zoom-in-left">
        <h1>2. Problem statement:</h1>
        <li>Bitcoin's decentralized nature and inherent value have made it a global phenomenon. However, its technical complexity often deters potential users, particularly those unfamiliar with blockchain technology.  Matrix aims to bridge this gap by providing a user-friendly interface and secure access methods to Bitcoin's capabilities.  Matrix is designed to empower users with simplified interactions while maintaining the security and immutability of Bitcoin transactions.</li>
        <li>Limited User Adoption: The high barrier to entry often restricts Bitcoin's potential user base, hindering its adoption and potential for broader financial inclusion.</li>
        <li>hindering its adoption and potential for broader financial inclusion.
Scalability Limitations: Some Bitcoin-based applications face scalability challenges, affecting transaction throughput and user experience.</li>
      </div>
      <div className="container" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <h1>4. Architecture:</h1>
        <p>Matrix comprises three key components:</p>
        <li>User Interface: A web-based or mobile application providing a streamlined interface for users to initiate and manage Bitcoin transactions.</li>
        <li>BitVM Executor: A secure module that executes BitVM scripts, ensuring the integrity and security of all transactions.</li>
        <li>ZK-Proof Generator: A module responsible for generating and verifying ZK-proofs to maintain user privacy.</li>
      </div>
     <RoadMap/>
    </div>
  )
}

export default Whitepaper
