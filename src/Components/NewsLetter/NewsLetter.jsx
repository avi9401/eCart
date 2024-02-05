import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your E-Mail</h1>
        <p>Subscribe today and stay updated!</p>
        <div>
            <input type='email' placeholder='enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter