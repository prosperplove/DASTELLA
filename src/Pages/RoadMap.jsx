import React from 'react'
import { FaCheckCircle, FaSpinner,FaPauseCircle } from 'react-icons/fa'
const RoadMap = () => {
  return (
    <div>
       <div className="container" id='roadmap' style={{ color:"white" }}>
              <h1 style={{ textAlign:"center" }}>Roadmap</h1>
              <table style={{ marginLeft:'auto', marginRight:"auto"}}>
                  <thead>
                      <tr>
                      <th>Phase</th>
                      <th>Milestone</th>
                      <th>Status</th>
                      </tr>
                      
                  </thead>
                  
                  <tbody>
                      
                      <tr>
                      <td>Q3 2025</td>
                      <td>Protocol design + audit</td>
                      <td><FaCheckCircle size={30} color='green'/></td>
                      </tr>
                      <tr>
                      <td>Q4 2025</td>
                      <td>Testnet launch with zk-rollups</td>
                       <td><FaSpinner size={30} color='blue'/></td>
                     
                      </tr>
                      <tr>
                      <td>Q1 2026</td>
                      <td>BTC Gateway +BitVm live</td>
                       <td><FaPauseCircle size={30} color='purple'/></td>
                       
                      </tr>
                      
                      <tr>
                      <td>Q2 2026</td>
                      <td>Zk-dApp ecosystem begins</td>
                       <td><FaPauseCircle size={30} color='purple'/></td>
                      
                      </tr>
                      <tr>
                      <td>Q3 2026</td>
                      <td>DAO governance launch</td>
                      <td><FaPauseCircle size={30} color='purple'/></td>
                      
                      </tr>
                  </tbody>
              </table>
            </div>
    </div>
  )
}

export default RoadMap
