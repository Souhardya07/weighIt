import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div  id='footer'   style={{height:"220px",width:"1490px"}}>
      <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
      </Link>
      <p className="text-muted">©weighIt 2021</p>
    </div>

    <div className="col">
       <ul>
       <li className="nav-item mb-2"id='text'><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"id='text'><Link to="/contactus" className="nav-link p-0 text-muted">Contact Us</Link></li>
        <li className="nav-item mb-2"id='text'><Link to="/services" className="nav-link p-0 text-muted">Services</Link></li>
       </ul>
    </div>

    <div className="col">
      <ul>
        <li className="nav-item mb-2"id='text'><Link to="/aboutus" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"id='text'><Link to="/aboutus" className="nav-link p-0 text-muted">About Us</Link></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}
