import React from 'react'

export default function Card() {
  return (
    <div >
        <div id='cardzero'sty>
        <div>
            <div className="card mt-3 m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/analog.jpg " className="card-img-top" alt="..." style={{height:"260px"}}/>
                <div className="card-body">
                    <h5 className="card-title fs-4 "> Balance (Analog) </h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price:Rs 6900/Pc</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/digital.jpg " className="card-img-top" alt="..." style={{height:"260px"}} />
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Balance (Digital)</h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price:Rs 14,500/Pc</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/measure.jpg " className="card-img-top" alt="..." style={{height:"260px"}} />
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Measuring Tapes </h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price:Rs 850/Pc</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/cranes.jpg " className="card-img-top" alt="..." style={{height:"260px"}} />
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Construction Cranes</h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price: Rs 5,65,000 </b></p></div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        <br/>
    <div id='cardzero'>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/truck.jpg " className="card-img-top" alt="..." style={{height:"260px"}}/>
                <div className="card-body">
                    <h5 className="card-title fs-4 ">WeighBridges </h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price:  Rs 12,45,000</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/crane.jpg " className="card-img-top" alt="..." style={{height:"260px"}} />
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Shipping Cranes </h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price: Rs 13,45,550</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        <div>
            <div className="card m-4 mt-3" id='cardone' style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src="/hooks.jpg " className="card-img-top" alt="..." style={{height:"260px"}}/>
                <div className="card-body">
                    <h5 className="card-title fs-4 ">Crane Hooks </h5>
                    <div className='container w-100'>
                       <b>Quantity:</b>
                        <select className='m-2 h-100  bg-white rounded'>
                           
                            {Array.from(Array(5), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-6'><p><b>Price:  Rs 399/Pc</b></p></div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
