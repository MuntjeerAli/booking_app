import React from 'react';
import './mailList.css';

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <p>Sign up and we will send the best deals for you,</p>
      <span className='mailInputContainer'>
        <input type='text' placeholder='Your Email'/>
        <button>Subscribe</button>
      </span>
    </div>
  )
}

export default MailList
