import React from 'react'
import Brand from "../assets/brand.png"
function Loader() {
  return (
    <div className='loader d-flex justify-content-center bg-primary children-bg-transparent align-items-center'>
        <div className="content d-flex flex-column justify-content-center align-items-center">
            <img src={Brand} alt="logo image" className="logo-loader img img-fluid" loading="lazy" />
            <h4 className='h4 text-warning  text-center'>softkhlome</h4>
            <h5 className="p  text-light">Loading...</h5>
        </div>
    </div>
  )
}

export default Loader