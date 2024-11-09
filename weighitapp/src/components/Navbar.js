import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark " id='navbar'>
  <div className="container-fluid">
   <Link className="navbar-brand fs-2 " to="/" >WeighIt</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"id='navtext'aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navtext' to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navtext'to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navtext'to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"style={{width:"500px",height:"30px"}}/>
      <button className="btn btn-outline-light" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
