import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Card from '../components/Card'

export default function Home() {
  return (
    <div id='home'>
      <div>
        <Navbar/>
      </div>
      <div >
        <Carousel/>
      </div>
      <div className='fs-2 mt-4 container'id='product'><b>OUR PRODUCTS:</b></div>
      <br/>
      <div><Card/></div>
      <div className='m-4'><Footer/></div>
    </div>
  )
}
