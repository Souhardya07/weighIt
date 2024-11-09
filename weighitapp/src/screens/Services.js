import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id='service'>
        <div className='fs-1'>
         <b> OUR SERVICES </b>
        </div>
        <br />
        <div  id='card'>
        <div className="card mt-3 m-4" id='cardtwo'  style={{ "width": "18rem"}}>
          <img src="/truck.jpg" className="card-img-top"  alt="..." />
          <div className="card-body">
            <hs className="crad-title fs-3 "> <b>WeighBridges</b></hs>
            <p className="card-text">Our service provides reliable, accurate weighbridges for trucks, ensuring precise weight measurement for safe, efficient transport and compliance with industry regulations. Ideal for logistics, construction, and heavy-duty operations.</p>
          </div>
        </div>
        <div className="card mt-3 m-4"  id='cardtwo' style={{ "width": "18rem" }}>
          <img src="/tools.jpg" className="card-img-top"  alt="..." />
          <div className="card-body">
            <hs className="crad-title fs-3"><b>Measuring Tools</b></hs>
            <p className="card-text">Our service offers precise household and commercial measuring tools, including scales, tapes, and gauges, designed for accuracy and durability. Perfect for daily tasks, professional projects, and quality control needs.</p>
          </div>
        </div>
        <div className="card mt-3 m-4"  id='cardtwo' style={{ "width": "18rem" }}>
          <img src="/cranes.jpg" className="card-img-top"  alt="..." />
          <div className="card-body">
            <hs className="crad-title fs-3"><b>Cranes</b></hs>
            <p className="card-text">Our service provides high-performance cranes for construction projects, ensuring safe, efficient lifting and heavy material handling. Ideal for various construction needs, from residential to industrial, supporting on-time and reliable project completion.</p>
          </div>
        </div>
        <div className="card mt-3 m-4" id='cardtwo' style={{ "width": "18rem" }}>
          <img src="/crane.jpg" className="card-img-top"  alt="..." />
          <div className="card-body">
            <hs className="crad-title fs-3"><b> Shipping Cranes</b></hs>
            <p className="card-text">Our service offers specialized shipping cranes for ports and terminals, ensuring safe, efficient cargo handling. Designed for heavy lifting, rapid unloading, and optimized port operations, enhancing overall logistics productivity and flow.</p>
          </div>
        </div>
        </div>
        <div className='m-4'>
        <Footer/>
      </div>
      </div>
      
    </>
  )
}
