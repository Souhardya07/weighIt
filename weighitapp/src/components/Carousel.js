import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-item active"id='carousel'>
      <img src="/truck.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}} alt='...'/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-3'>India's Most trusted WeighBridge Producer</h5>
      </div>
    </div>
    <div className="carousel-item" id='carousel'>
      <img src="/tools.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}} alt='...'/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-3'>Accurate Commercial and Domestic measuring tools</h5>
      </div>
    </div>
    <div className="carousel-item" id='carousel'>
      <img src="/crane.jpg" className="d-block w-100" style={{filter:"brightness(40%)"}}alt='...'/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='fs-3'>Top Noche Shipping Cranes</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
