import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <p>Bestsellers</p>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt='exclusive' />

      </div>
    </div>
  )
}

export default Offers