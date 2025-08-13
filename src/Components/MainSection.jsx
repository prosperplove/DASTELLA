import React,{useEffect} from 'react'
import wall from "../Images/wall.jpg"
import { Link } from 'react-router-dom'
import { FaLinkedin,FaNewspaper, FaChartBar, FaChartColumn, FaBtc } from 'react-icons/fa6'
import Crypto from '../Pages/Crypto'
import Sponsors from '../Pages/Sponsors'
import LockedCoin from '../Pages/LockedCoin'
import RoadMap from '../Pages/RoadMap'
import  AOS  from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const MainSection = () => {
   useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  
  return (
    <div style={{ paddingTop:'60px' }}>
     <div className="container py-4" id='main-section' style={{ textAlign:'center' }}>
      <div>
      <h1>Monitor the market, <br />The gateway to <span style={{ color:"purple", fontWeight:"bold" }}>Bitcoin DeFi</span></h1>
       <p>Start exploring the crypto world now, with our market tracker and the easiest way to access yield on your Bitcoin</p>
         <Link to="/Whitepaper"><button className='btn'>Whitepaper</button></Link>
         </div>
     </div>
    
        {/* <div className="lamp"></div> */}
     <div className='container' id='updates' style={{border:'solid',backgroundColor:"#1a161dff", borderBlockColor:"#1a161dff"}}>
      <div className="row">
            <div className='col-12 col-md-4 col-lg-4' style={{ color:"white" }}>
            <FaChartBar size={30} color='purple'/>
            <h1>Monitor the current market prices</h1>
            <p>We provide current state of the market in real time, making you able to stay updated with the ups and down of the market</p>
            </div>
            <div className='col-12 col-md-4 col-lg-4' style={{ color:"white" }}>
            <FaChartColumn size={30} color='purple'/>
            <h1>Native Bitcoin DeFi</h1>
            <p>Trustless BTC deposits, powered by BitVm and Zk-proofs.</p>
            </div>
             <div className='col-12 col-md-4 col-lg-4' style={{ color:"white" }}>
            <FaBtc size={30} color='purple'/>
            <h1>Multi-chain Bitcoin Yield</h1>
            <p>Access BTC DeFi on any chain, powered by Bitcoin intents, vaults and BTC-secured bridges</p>
            </div>
            </div>
      </div>
        <Crypto/>
        <div className="lamp-container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
          <div className="lamp py-4"></div>
          </div>
           <div className="col-12 col-md-6 col-lg-6">
            <div  data-aos="flip-left">
              <p style={{ fontSize:"1.5rem", fontWeight:"lighter",  }}>Build on Matrix with Bitcoin</p>
              <p style={{ color:"antiquewhite" }}>Matrix has best-in-class EVM and Bitcoin infrastructure paired <br /> with the fastest on-ramps for BTC, stablecoins and ERC20s</p>
              <Link to="/TokenUtility"><button className='btn btn-outline-primary'>Token Utility</button></Link>
            </div>
           </div>
          </div>
          </div>
          <Sponsors/>
        <LockedCoin/>
        <RoadMap/>
    </div>
  )
}

export default MainSection
