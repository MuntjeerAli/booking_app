import React from 'react';
import "./featured.css";
import Mumbai from "../../images/mumbai1.jpg";
import Pune from "../../images/pune2.jpg";
import Jaipur from "../../images/jaipur2.jpg";
import Bengaluru from "../../images/bengaluru2.jpg";
import Chennai from "../../images/chennai2.jpg";
import Hyderabad from "../../images/hyderabad2.jpg";


const featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img src={Mumbai} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Mumbai</h1>
            <h2>121 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src={Pune} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Pune</h1>
            <h2>91 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src={Bengaluru} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Bangalore</h1>
            <h2>102 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src={Hyderabad} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Hyderabad</h1>
            <h2>89 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src={Chennai} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Chennai</h1>
            <h2>81 properties</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src={Jaipur} alt='' className='featuredImg'/>
        <div className='featuredTitles'>
            <h1>Jaipur</h1>
            <h2>79 properties</h2>
        </div>
      </div>
      
    </div>
  )
}

export default featured
