import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Contactus() {
  return (
    <>
      <div id='contactus'>
        <div>
          <Navbar />
        </div>
        <div className='fs-1'><b>CONTACT US</b></div>
        <div >
        <form className="d-flex" style={{ height: "60px", width: "850px" }}>
          <input className="form-control " type="search" placeholder="submit your feedback" aria-label="search" />
          <button className="btn btn-outline-dark m-2" type="submit" style={{ height: "50px" }}>Submit</button>
        </form>

        <div className='mt-4'>
          <h3> <b>
            Contact :
          </b>
          </h3>
          <br /><h5><b>Via Phone</b></h5>
          <br />
          <p><b> +91 87574 23845 (Kolkata)| +91 76653 76653 (Chandigarh)| +91 68495 57463 (Pune)|+91 97856 77362 (Noida)
            <br /> +91 78293 65746 (Bhopal) | +91 84295 37642(Goa)</b></p>
          <br />
          <br /><h5><b>Via E-mail</b></h5>
          <br />
          <p><b>weighitcustoms10@gamil.com | weighitbusiness@gamil.com | weighit2000@gmail.com</b></p>
        </div>
        <div>
          <h3>
            <b>
              Follow Us:
            </b>
          </h3>
          <b>
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">Instagram</Link>
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">X.com</Link>
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">facebook</Link>
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">WhatsApp</Link>
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">Youtube</Link>
          </b>
        </div>
        <div >
          <Footer />
        </div>
        </div>
      </div>
    </>
  )
}
