import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import Header from '../../components/header/Header.js';
import Featured from '../../components/featured/Featured.js';
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
      </div>
    </div>
    
  )
}

export default Home
